import { Controller, Get, Query } from '@nestjs/common';
import { Job } from './job.model';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async getProducts(
    @Query('description') description: string,
    @Query('city') city: string,
    @Query('page') page = 0,
  ): Promise<PaginatedResults<Job>> {
    const jobs = await this.jobsService.getJobs(page);
    return {
      page,
      items: jobs,
      size: 50,
    };
  }
}
