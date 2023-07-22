import { Test, TestingModule } from '@nestjs/testing';
import { SendCodeController } from './sendCode.controller';

describe('SendCodeController', () => {
  let controller: SendCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendCodeController],
    }).compile();

    controller = module.get<SendCodeController>(SendCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
