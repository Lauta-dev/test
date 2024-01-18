import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from "express"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get("app")
  hi(
    @Res() res: Response
  ) {
    res.json("Hola")
  }
}
