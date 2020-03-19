import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MomentsController } from './moments/moments.controller';
import { MomentsService } from './moments/moments/moments.service';

@Module({
  imports: [],
  controllers: [AppController, MomentsController],
  providers: [AppService, MomentsService],
})
export class AppModule {}
