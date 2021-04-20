import { Injectable } from '@nestjs/common';
import {
  ClientOptions,
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class SearchesService {
  private client: ClientProxy;
  constructor() {
    const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
    const REDIS_PORT = process.env.REDIS_PORT || 6379;
    const clientOptions: ClientOptions = {
      transport: Transport.REDIS,
      options: {
        url: `redis://${REDIS_HOST}:${REDIS_PORT}`
      },
    };
    this.client = ClientProxyFactory.create(clientOptions);
  }
  public async logSearch(
    time: Date,
    description: string,
    city: string,
    ipAddress,
  ) {
    await this.client.emit('jobs_searched', {
      time,
      description,
      location: city,
      ipAddress,
    });
  }
}
