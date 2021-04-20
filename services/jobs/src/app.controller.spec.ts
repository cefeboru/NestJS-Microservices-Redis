import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Job } from './models/job.model';
import { JobsService } from './services/jobs.service';
import { SearchesService } from './services/searches.service';
import mockDate from 'mockdate';

jest.mock('./services/jobs.service');
jest.mock('./services/searches.service');

describe('AppController', () => {
  let appController: AppController;
  let jobsService: JobsService;
  let searchesService: SearchesService;

  beforeEach(async () => {
    mockDate.set(1434319925275);
    jobsService = jest.fn() as any;
    searchesService = jest.fn() as any;
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [JobsService, SearchesService],
    }).compile();

    appController = app.get<AppController>(AppController);
    jobsService = app.get<JobsService>(JobsService);
    searchesService = app.get<SearchesService>(SearchesService);
  });

  afterAll(mockDate.reset);

  describe('GET /jobs', () => {
    const page = 1;
    const description = 'Javascript';
    const city = 'Remote';
    const pageSize = 50;
    const clientIP = '127.0.0.1';
    const mockedJobs: Array<Job> = [
      {
        id: '2ecfcca7-2c1b-48c7-ae2b-373cee3fd309',
        type: 'Fulltime',
        url:
          'https://jobs.github.com/positions/2ecfcca7-2c1b-48c7-ae2b-373cee3fd309',
        company: 'Fake Company',
        company_url: 'https://fake-company.com',
        company_logo: 'https://path-to-logo',
        created_at: new Date().toUTCString(),
        description: '<p>Job Description</p>',
        title: 'Senior Software Engineer',
        location: 'New South Wales Australia',
        how_to_apply:
          '<p><a href="https://iworkfor.nsw.gov.au/job/senior-software-engineer-239097">https://iworkfor.nsw.gov.au/job/senior-software-engineer-239097</a></p>\n',
      },
    ];
    it('Should return a list of paginated jobs', async () => {
      const getJobsSpy = jest
        .spyOn(jobsService, 'getJobs')
        .mockResolvedValueOnce(mockedJobs);
      const result = await appController.getJobs(clientIP, {
        page,
        description,
        city,
      });
      expect(getJobsSpy).toHaveBeenCalledWith(page, description, city);
      expect(result).toEqual({
        page,
        pageSize,
        items: mockedJobs,
      });
    });

    it('Should dispatch jobs_searched event if location or description params ware defined', async () => {
      jest.spyOn(jobsService, 'getJobs').mockResolvedValueOnce(mockedJobs);
      const logSearchSpy = jest
        .spyOn(searchesService, 'logSearch')
        .mockImplementationOnce(() => Promise.resolve());
      await appController.getJobs(clientIP, { page, description, city });
      expect(logSearchSpy).toHaveBeenCalledWith(
        new Date(),
        description,
        city,
        clientIP,
      );
    });
  });
});
