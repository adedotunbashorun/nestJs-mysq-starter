
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from '../users/users.module';
import { SettingsModule } from '../settings/settings.module';
import configuration from '../config/app.config';

import CoreController from './core.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    UsersModule, 
    SettingsModule
  ],
  controllers: [CoreController],
  providers: [],
})
export class CoreModule {}
