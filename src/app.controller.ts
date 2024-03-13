import { Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('url')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('save')
  saveURL(@Query('url') url) {
    return this.appService.saveURL(url);
  }

  @Get('redirect')
  redirectToShortURL(@Res() res, @Query('url') url) {
    return this.appService.redirectToShortURL(res, url);
  }

  @Get()
  getAllURLs() {
    return this.appService.getAllURLs();
  }
}
