import { ApplicationConfig, provideBrowserGlobalErrorListeners, inject } from '@angular/core';
import { provideRouter, TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { routes } from './app.routes';

export class CustomTitleStrategy extends TitleStrategy {
  private title = inject(Title);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title) {
      this.title.setTitle(`${title} | cargo-commitlint`);
    } else {
      this.title.setTitle('cargo-commitlint - Rust-based Commit Message Linter');
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategy
    }
  ]
};
