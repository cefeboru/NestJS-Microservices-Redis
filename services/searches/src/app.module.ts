import { Module } from '@nestjs/common';
import { SearchesController } from './app.controller';
import { SearchesService } from './searches.service';

@Module({
  imports: [],
  controllers: [SearchesController],
  providers: [SearchesService],
})
export class AppModule {}
