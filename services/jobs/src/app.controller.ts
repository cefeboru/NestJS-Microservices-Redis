import { Controller, Get, Query } from '@nestjs/common';
import { Job } from './job.model';
import { JobsService } from './jobs.service';
import { SearchesService } from './searches.service';

@Controller('jobs')
export class AppController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly searchesService: SearchesService,
  ) {}

  @Get()
  async getProducts(
    @Query('description') description: string,
    @Query('location') city: string,
    @Query('page') page = 0,
  ): Promise<PaginatedResults<Job>> {
    const jobs = await this.jobsService.getJobs(page, description, city);
    if (description || city) {
      await this.searchesService.logSearch(
        new Date(),
        description,
        city,
        '127.0.01',
      );
    }
    return {
      page,
      items: jobs,
      size: 50,
    };
  }
}
