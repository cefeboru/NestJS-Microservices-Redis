import { Controller, Get, Param } from '@nestjs/common';
import { Job } from './job.model';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async getProducts(
    @Param('description') description: string,
    @Param('city') city: string,
    @Param('page') page = 0,
  ): Promise<PaginatedResults<Job>> {
    const jobs = await this.jobsService.getJobs(page);
    return {
      page,
      items: jobs,
      size: 50,
    };
  }
}
