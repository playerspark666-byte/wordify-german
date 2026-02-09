import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Health / root API endpoint
   * Effective route: GET /api
   *
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
   * Catch-all API route
   * Effective route: GET /api/*
   *
   * Uses named wildcard (path-to-regexp v6+ compliant)
   */
  @Get('*path')
  catchAll() {
    return {
      status: 'ok',
      message: 'API is running',
    };
  }
}
