import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmService } from './films.service';
import { FilmController } from './films.controller';
import { Film } from './films.entity';

@Module({
  providers: [FilmService],
  controllers: [FilmController],
  imports: [TypeOrmModule.forFeature([Film])],
})
export class FilmModule {}
