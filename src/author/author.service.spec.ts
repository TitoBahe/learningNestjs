import { Test, TestingModule } from '@nestjs/testing';
import { AuthorService } from './author.service';

describe('AuthorService oiiii', () => {
  let service: AuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorService],
    }).compile();

    service = module.get<AuthorService>(AuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return This action returns all author', ()=>{
    expect(service.findAll()).toBe('This action returns all authr');
  })
});
