import { sendTGDataDto } from '../../controllers/sendCode/sendTGDataDto.dto';
import { HttpService } from '@nestjs/axios';
export declare class SendCodeService {
    private readonly httpService;
    constructor(httpService: HttpService);
    sendCodeTG(senderData: sendTGDataDto): Promise<boolean>;
}
