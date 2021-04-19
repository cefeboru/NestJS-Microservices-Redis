import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IpAddress } from './ipAddress.decorator';
import { Job } from './job.model';
import { JobsService } from './jobs.service';
import { SearchesService } from './searches.service';

class GetJobsQueryParams {
  @ApiPropertyOptional()
  page?: number
  @ApiPropertyOptional()
  description?: string
  @ApiPropertyOptional()
  city?: string
}

class PaginatedJobsResponse {
  @ApiProperty()
  page: number;
  @ApiProperty({ type: () => [Job] })
  items: Array<Job>;
  @ApiProperty()
  pageSize: number;
}

@Controller('jobs')
export class AppController {
  constructor(
    private readonly jobsService: JobsService,
    private readonly searchesService: SearchesService,
  ) {}

  @ApiOkResponse({
    description: 'Returns all or filtered jobs that matches search criteria',
    type: PaginatedJobsResponse
  })
  @Get()
  async getJobs(
    @IpAddress() ipAddress,
    @Query() queryParams: GetJobsQueryParams
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
