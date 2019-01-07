import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // Material
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    //
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
