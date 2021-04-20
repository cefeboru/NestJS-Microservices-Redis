import { SearchesService } from './searches.service';
import mockDate from 'mockdate';
import { ClientProxyFactory } from '@nestjs/microservices';

jest.mock('@nestjs/microservices/client', () => ({
  ClientProxyFactory: {
    create: jest.fn(),
  },
}));

describe('SearchesService', () => {
  let searchesService: SearchesService;
  let tcpClientMock: any;
  beforeAll(() => {
    mockDate.set(1618803701619);
    tcpClientMock = {
      emit: jest.fn(),
    };
    (ClientProxyFactory.create as jest.Mock).mockImplementation(() => {
      return tcpClientMock;
    });
    searchesService = new SearchesService();
  });

  afterAll(mockDate.reset);

  describe('.logSearch', () => {
    it('Should emit a jobs_searched event with the correct payload', async () => {
      const time = new Date();
      const city = 'Remote';
      const description = 'some description';
      const ipAddress = '127.0.0.1';
      await searchesService.logSearch(time, description, city, ipAddress);
      expect(tcpClientMock.emit).toHaveBeenCalledWith('jobs_searched', {
        time,
        description,
        location: city,
        ipAddress,
      });
    });
  });
});
