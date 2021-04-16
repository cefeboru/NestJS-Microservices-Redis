import { Injectable } from '@nestjs/common';
import { Search } from './search.model';

const searches: Array<Search> = [];

@Injectable()
export class SearchesService {
  async saveSearchLog(
    time: number,
    description: string,
    location: string,
    ipAddress: string,
  ): Promise<Search> {
    const search = new Search(time, description, location, ipAddress);
    searches.push(search);
    return search;
  }
}
