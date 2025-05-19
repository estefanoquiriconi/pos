import { Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put()
  getPut(): string {
    return 'Desde @Put';
  }

  @Patch()
  getPatch(): string {
    return 'Desde @Patch';
  }

  @Post()
  getPost(): string {
    return this.appService.postHello();
  }
}
