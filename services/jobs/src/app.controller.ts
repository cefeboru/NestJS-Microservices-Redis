import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { IpAddress } from './ipAddress.decorator';
import { Job } from './models/job.model';
import { JobsService } from './services/jobs.service';
import { PaginatedJobsResponse } from './models/paginatedJobResponse.model';
import { SearchesService } from './services/searches.service';
import { GetJobsQueryParams } from './models/getJobsQueryParams.model';

@Controller('jobs')
export class AppController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly searchesService: SearchesService,
  ) {}

  @ApiOkResponse({
    description: 'Returns all or filtered jobs that matches search criteria',
    type: PaginatedJobsResponse,
  })
  @ApiBadRequestResponse({
    description: 'Either city or description has an invalid value',
  })
  @Get()
  async getJobs(
    @IpAddress() ipAddress,
    @Query() queryParams: GetJobsQueryParams,
  ): Promise<PaginatedResults<Job>> {
    const { city, description, page } = queryParams;
    const jobs = await this.jobsService.getJobs(page || 0, description, city);
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
