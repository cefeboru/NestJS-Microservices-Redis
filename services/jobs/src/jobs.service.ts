import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as queryString from 'querystring';
import { Job } from './job.model';

@Injectable()
export class JobsService {
  private baseApiPath = 'https://jobs.github.com/positions.json';

  async getJobs(
    page: number,
    description?: string,
    city?: string,
  ): Promise<Array<Job>> {
    const query = queryString.encode({
      page,
      ...(description && { description }),
      ...(city && { city: city }),
    });
    const response = await axios.get(`${this.baseApiPath}?${query}`);

    return response.data;
  }
}
