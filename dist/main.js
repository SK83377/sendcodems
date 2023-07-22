"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
'';
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
            ],
            queue: 'send_code_ms_queue',
            replyQueue: 'send_code_ms_queue_reply',
            noAck: false,
            queueOptions: {
                durable: true,
            },
        },
    });
    await app.listen();
    console.log('Microservice started');
}
bootstrap();
//# sourceMappingURL=main.js.map