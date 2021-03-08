import { Module } from '@nestjs/common';
import { ToggleController } from './toggle.controller';
import { ToggleService } from './toggle.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { toggleProviders } from './toggle.providers';

@Module({
  imports: [
    DatabaseModule, ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [ToggleController],
  providers: [ToggleService, ...toggleProviders],
})
export class AppModule {}
