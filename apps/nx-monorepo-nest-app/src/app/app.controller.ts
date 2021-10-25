import { Controller, Get, Query, Req } from '@nestjs/common';
import { PingServerResponse } from '@joey-mckenzie-io-blog-samples/shared';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  @Get('ping')
  getData(@Query('from') from: string): Observable<PingServerResponse> {
    return of({ message: `Hello from ${from}!` });
  }
}
