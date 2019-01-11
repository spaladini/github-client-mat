import { Injectable } from '@angular/core';
import { TOKEN_NAME } from './token.service';
import { Subject } from 'rxjs';

export const NO_TOKEN = 'no_token';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public logoutNotifier = new Subject<string>();

  constructor() {
    window.addEventListener('storage', this.callbackListener.bind(this));
  }

  private callbackListener(event: StorageEvent): void {
    if (event && event.storageArea === localStorage) {
      if (!event.key || (event.key === TOKEN_NAME && !event.newValue)) {
        this.logoutNotifier.next(NO_TOKEN);
      }
    }
  }
}
