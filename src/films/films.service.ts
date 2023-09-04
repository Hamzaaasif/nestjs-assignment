import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './films.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Film) private readonly filmRepository: Repository<Film>,
  ) {}

  async createFilm(body: Partial<Film>): Promise<Film> {
    Logger.debug(
      'adding film function for creating films: %s',
      JSON.stringify(body),
    );
    try {
      Logger.debug('Adding new file: %s');
      const film: Film = new Film();
      film.name = body.name;
      film.description = body.description;
      film.releaseDate = body.releaseDate;
      film.ticketPrice = body.ticketPrice;
      film.country = body.country;
      film.genre = body.genre;
      film.photo = body.photo;

      await this.filmRepository.save(film);
      Logger.log('Film added to db');
      return film;
    } catch (error) {
      Logger.error('film service, adding film error ', error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getUserById(id: string): Promise<Film> | undefined {
    try {
      Logger.debug(`Get user byd id ==> ${id}`);
      const film = await this.filmRepository.findOne({
        where: {
          id,
        },
      });
      Logger.debug('Film by email at getFilmById', JSON.stringify(film));
      if (!film) {
        Logger.error('userService getUserbyId, user not found');
        throw new HttpException('Film not found', HttpStatus.NOT_FOUND);
      }
      return film;
    } catch (error) {
      Logger.error('filmService getFilmById error', error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
