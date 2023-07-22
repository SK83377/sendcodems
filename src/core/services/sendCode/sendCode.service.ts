import { Injectable } from '@nestjs/common';
import { sendTGDataDto } from '../../controllers/sendCode/sendTGDataDto.dto';
import { HttpService } from '@nestjs/axios';
import { env } from 'process';

@Injectable()
export class SendCodeService {
    constructor(
        private readonly httpService: HttpService
    ) {}
    public async sendCodeTG (senderData: sendTGDataDto) {
        try {
            const resultSendCode = await this.httpService.get(`${env.TELEGRAM_API}sendMessage`, {
                params: {
                    chat_id: senderData.chatId,
                    text: senderData.code
                }
            }).toPromise();   
            return true;
        } catch (error) {
            console.log('SendCodeService.sendCodeTG in catch, error: ', error);
            return false;
        }
    } 
}
