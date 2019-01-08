import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderInterceptorService } from './interceptors/header-interceptor.service';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    FlexLayoutModule,

    // Material
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
