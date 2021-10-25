import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  LOCAL_SERVER_API_BASE_URL,
  PingServerResponse,
} from '@joey-mckenzie-io-blog-samples/shared';

@Component({
  selector: 'joey-mckenzie-io-blog-samples-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnDestroy {
  serverResponse$?: Observable<string>;

  private readonly unsubscribe$ = new Subject();

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  pingServer(): void {
    this.serverResponse$ = this.http
      .get<PingServerResponse>(`${LOCAL_SERVER_API_BASE_URL}/ping?from=angular`)
      .pipe(map((serverResponse) => serverResponse.message));
  }
}
