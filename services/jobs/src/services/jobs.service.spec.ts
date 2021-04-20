import axios from 'axios';
import { JobsService } from './jobs.service';
jest.mock('axios');
jest.mock('@nestjs/microservices/client', () => ({
  ClientProxyFactory: {
    create: jest.fn(),
  },
}));
describe('JobsService', () => {
  let jobsService: JobsService;
  let axiosGetMock: jest.Mock;
  beforeAll(() => {
    jobsService = new JobsService();
    axiosGetMock = axios.get as jest.Mock;
    axiosGetMock.mockResolvedValue({
      statusCode: 200,
      data: undefined,
    });
  });
  describe('.getJobs', () => {
    afterEach(jest.clearAllMocks);

    it('Should make get request to the Github Jobs public API', async () => {
      const page = 0;
      await jobsService.getJobs(page);
      const [getRequestUrl] = axiosGetMock.mock.calls[0][0].split('?');
      expect(getRequestUrl).toEqual('https://jobs.github.com/positions.json');
    });
    it('Should include page in queryString', async () => {
      const page = 0;
      await jobsService.getJobs(page);
      const queryString = axiosGetMock.mock.calls[0][0].split('?')[1];
      expect(queryString).toMatch(`page=${page}`);
    });
    it('Should include description in queryString if defined', async () => {
      const description = 'javascript';
      await jobsService.getJobs(1, description);
      const queryString = axiosGetMock.mock.calls[0][0].split('?')[1];
      expect(queryString).toMatch(`description=${encodeURI(description)}`);
    });
    it('Should include location in queryString if defined', async () => {
      const city = 'remote';
      await jobsService.getJobs(1, undefined, city);
      const queryString = axiosGetMock.mock.calls[0][0].split('?')[1];
      expect(queryString).toMatch(`location=${encodeURI(city)}`);
    });
  });
});
