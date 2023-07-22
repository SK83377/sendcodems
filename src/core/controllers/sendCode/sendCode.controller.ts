import { Controller } from '@nestjs/common';
import { SendCodeService } from 'src/core/services/sendCode/sendCode.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class SendCodeController {
    constructor(
        private readonly sendCodeService: SendCodeService
    ) {}

    @MessagePattern('send')    
    async sendCode (sendTGData): Promise<boolean> {
        return await this.sendCodeService.sendCodeTG(sendTGData);
    }
}
