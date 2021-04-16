import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JobsService } from './jobs.service';
import { SearchesService } from './searches.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [JobsService, SearchesService],
})
export class AppModule {}
