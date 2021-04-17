import { Controller } from '@nestjs/common';
import { Search } from './search.entity';
import { SearchesService } from './searches.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly searchesService: SearchesService) {}

  @EventPattern('jobs_searched')
  async handleJobsSearch(payload): Promise<Search> {
    console.log(payload);
    const search = await this.searchesService.saveSearchLog(
      new Date(payload.time),
      payload.description,
      payload.location,
      payload.ipAddress,
    );
    return search;
  }
}
