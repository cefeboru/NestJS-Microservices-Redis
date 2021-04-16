import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class SearchesService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    });
  }
  public logSearch(
    time: Date,
    description: string,
    location: string,
    ipAddress,
  ) {
    return this.client.emit('jobs_searched', {
      time,
      description,
      location,
      ipAddress,
    });
  }
}
