import { ApiPropertyOptional } from '@nestjs/swagger';
import { CITY, DESCRIPTION } from './job.model';
import { IsEnum, IsOptional } from 'class-validator';
import { getEnumValues } from '../util';

export class GetJobsQueryParams {
  @ApiPropertyOptional()
  page?: number;
  @ApiPropertyOptional({ enum: DESCRIPTION })
  @IsEnum(DESCRIPTION, {
    message: `Description must be one of: ${getEnumValues(CITY).join(', ')}`,
  })
  @IsOptional()
  description?: string;
  @ApiPropertyOptional({ enum: CITY })
  @IsEnum(CITY, {
    message: `City must be one of: ${getEnumValues(CITY).join(', ')}`,
  })
  @IsOptional()
  city?: string;
}
