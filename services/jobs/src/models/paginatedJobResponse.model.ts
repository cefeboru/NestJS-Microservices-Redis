import { ApiProperty } from '@nestjs/swagger';
import { Job } from './job.model';

export class PaginatedJobsResponse {
  @ApiProperty()
  page: number;
  @ApiProperty({ type: () => [Job] })
  items: Array<Job>;
  @ApiProperty()
  pageSize: number;
}
