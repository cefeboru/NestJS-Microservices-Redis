import { Controller, Get, Query } from '@nestjs/common';
import { IpAddress } from './ipAddress.decorator';
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
  async getJobs(
    @Query('page') page = 0,
    @Query('description') description: string,
    @Query('city') city: string,
    @IpAddress() ipAddress,
  ): Promise<PaginatedResults<Job>> {
    const jobs = await this.jobsService.getJobs(page, description, city);
    if (description || city) {
      await this.searchesService.logSearch(
        new Date(),
        description,
        city,
        ipAddress,
      );
    }
    return {
      page,
      items: jobs,
      pageSize: 50,
    };
  }
}
