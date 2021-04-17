import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SearchesService } from './searches.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from './search.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Search])
  ],
  controllers: [AppController],
  providers: [SearchesService],
})
export class AppModule {}
