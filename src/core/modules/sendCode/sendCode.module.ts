import { Module } from '@nestjs/common';
import { SendCodeController } from '../../controllers/sendCode/sendCode.controller';
import { SendCodeService } from '../../services/sendCode/sendCode.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [SendCodeModule, HttpModule],
    controllers: [SendCodeController],
    providers: [SendCodeService],
})
export class SendCodeModule {}
