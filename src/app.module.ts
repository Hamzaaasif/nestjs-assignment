import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { getEnvPath } from './config/database/env';

import { TypeOrmConfigService } from './config/database/database';
import { AppController } from 'app.controller';
import { FilmModule } from './films/films.module';
import { FilmRatingModule } from './filmRating/filmsRating.module';

const envFilePath: string = getEnvPath(join(`${__dirname}`, '..'));
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    AuthModule,
    CoreModule,
    UsersModule,
    FilmModule,
    FilmRatingModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
