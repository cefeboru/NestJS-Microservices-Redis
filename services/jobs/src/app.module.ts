import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JobsService } from './services/jobs.service';
import { SearchesService } from './services/searches.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [JobsService, SearchesService],
})
export class AppModule {}
