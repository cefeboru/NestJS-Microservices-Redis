import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SearchesService } from './searches.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [SearchesService],
})
export class AppModule {}
