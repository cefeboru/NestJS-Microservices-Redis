import { ApiProperty } from '@nestjs/swagger';

export class PaginatedJobsResponse {
  @ApiProperty()
  error: string;
}
