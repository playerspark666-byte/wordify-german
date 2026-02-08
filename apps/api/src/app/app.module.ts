import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
<<<<<<< Updated upstream
import pino from 'pino';
=======
>>>>>>> Stashed changes
import { AppController } from './app.controller';
import { AppService } from './app.service';

const isDev = process.env.NODE_ENV !== 'production';

const logger = isDev
  ? pino({
      transport: {
        target: 'pino-pretty',
        options: { colorize: true, translateTime: 'HH:MM:ss' },
      },
    })
  : pino({ level: 'info' });

@Module({
  imports: [
    LoggerModule.forRoot({
<<<<<<< Updated upstream
      pinoHttp: { logger },
=======
      pinoHttp: isDev
        ? {
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
                translateTime: 'HH:MM:ss',
              },
            },
          }
        : {
            level: 'info',
          },
>>>>>>> Stashed changes
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
