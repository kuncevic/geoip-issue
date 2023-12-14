import { Controller, Get, Ip } from '@nestjs/common';
import { lookup } from 'geoip-country';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(@Ip() ip): string {
    const country = lookup(ip);
    return country?.country || 'unknown';
  }
}
