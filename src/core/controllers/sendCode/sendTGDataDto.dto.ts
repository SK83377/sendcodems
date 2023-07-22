import {
    IsString,
    Length,
    IsNotEmpty,
  } from 'class-validator';
  
  export class sendTGDataDto {
    @IsNotEmpty()
    @IsString()
    @Length(4, 20)
    chatId: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(8, 8)
    code: string;
  }
  