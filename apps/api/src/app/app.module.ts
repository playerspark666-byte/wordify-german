import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import pinoHttp from 'pino-http';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const isDev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: isDev
        ? pinoHttp({
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
                translateTime: 'HH:MM:ss',
              },
            },
          })
        : pinoHttp({ level: 'info' }), // production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
