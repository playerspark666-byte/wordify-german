import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Health / root API endpoint
   * Used by:
   * - browser
   * - e2e tests
   * - docker healthcheck
   * - CI
   */
  @Get()
  getData() {
    return this.appService.getData();
  }

  /**
   * Catch-all API route (optional but recommended)
   * Prevents legacy "/api/*" warnings elsewhere
   */
  @Get('*')
  catchAll() {
    return {
      status: 'ok',
      message: 'API is running',
    };
  }
}
