import { Test, TestingModule } from '@nestjs/testing';
import { SendCodeService } from './sendCode.service';

describe('SendCodeService', () => {
  let service: SendCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendCodeService],
    }).compile();

    service = module.get<SendCodeService>(SendCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
