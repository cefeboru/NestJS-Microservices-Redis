import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Search } from './search.entity';

@Injectable()
export class SearchesService {
  constructor(
    @InjectRepository(Search)
    private searchesRepository: Repository<Search>
  ) {}
  async saveSearchLog(
    time: Date,
    description: string,
    location: string,
    ipAddress: string,
  ): Promise<Search> {
    const search = new Search(time, description, location, ipAddress);
    await this.searchesRepository.save(search);
    return search;
  }
}
