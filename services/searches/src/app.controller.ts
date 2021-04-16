import { Controller } from '@nestjs/common';
import { Search } from './search.model';
import { SearchesService } from './searches.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class SearchesController {
  constructor(private readonly searchesService: SearchesService) {}

  @EventPattern('jobs_searched')
  async handleJobsSearch(payload): Promise<Search> {
    console.log(payload);
    const search = await this.searchesService.saveSearchLog(
      payload.time,
      payload.description,
      payload.location,
      payload.ipAddress,
    );
    return search;
  }
}
