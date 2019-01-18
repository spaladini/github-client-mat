import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CustomTranslateLoader } from 'src/i18n/custom-translate-loader';
import { CustomMissingTranslationHandler } from 'src/i18n/missing-translation-handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Auth0CallbackComponent } from './auth0-callback/auth0-callback.component';
import { Auth0HomeComponent } from './auth0-home/auth0-home.component';
import { Auth0LoginComponent } from './auth0-login/auth0-login.component';
import { IssueAddComponent } from './issue-add/issue-add.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeStylePipe } from './safe-style.pipe';
import { SecurityTestComponent } from './security-test/security-test.component';
import { MaterialTestComponent } from './material-test/material-test.component';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    IssueListComponent,
    IssueAddComponent,
    MenuComponent,
    ProfileComponent,
    SecurityTestComponent,
    SafeHtmlPipe,
    SafeStylePipe,
    Auth0LoginComponent,
    Auth0CallbackComponent,
    Auth0HomeComponent,
    MaterialTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    FlexLayoutModule,
    TranslateModule.forRoot({
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
      loader: { provide: TranslateLoader, useClass: CustomTranslateLoader }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    // Material
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [
    // Viene usato l'interceptor della libreria https://github.com/auth0/angular2-jwt
    // { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
