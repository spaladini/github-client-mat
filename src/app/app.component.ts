import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-client-mat';

  notificationsOptions = {
    position: ['top', 'right'],
    timeOut: 5000,
    lastOnBottom: false,
    showProgressBar: false,
    pauseOnHover: true,
    clickToClose: true,
    animate: 'scale'
  };

  constructor(private translate: TranslateService) {
    translate.addLangs(['it', 'en']);
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
  }

}
