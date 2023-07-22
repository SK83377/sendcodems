import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SendCodeModule } from './core/modules/sendCode/sendCode.module';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SendCodeModule,
    ClientsModule.register([
  { 
    name: 'HELLO_SERVICE', transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`],
      queue: 'send_code_ms_queue',
      replyQueue: 'send_code_ms_queue_reply',
      noAck: false,
      queueOptions: {
        durable: true
            },
      },
   },
 ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
