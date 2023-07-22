import { SendCodeService } from 'src/core/services/sendCode/sendCode.service';
export declare class SendCodeController {
    private readonly sendCodeService;
    constructor(sendCodeService: SendCodeService);
    sendCode(sendTGData: any): Promise<boolean>;
}
