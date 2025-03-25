import { Test, TestingModule } from '@nestjs/testing';
import { PostAllService } from './post-all.service';

describe('PostAllService', () => {
  let service: PostAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostAllService],
    }).compile();

    service = module.get<PostAllService>(PostAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
