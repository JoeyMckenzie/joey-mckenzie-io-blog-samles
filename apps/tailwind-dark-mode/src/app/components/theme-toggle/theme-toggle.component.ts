import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';

@Component({
  selector: 'joey-mckenzie-io-blog-samples-theme-toggle',
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent implements OnInit, OnDestroy {
  darkModeEnabled$ = this.darkModeService.darkModeEnabled$;

  private unsubscribe$ = new Subject();

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeEnabled$.pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
