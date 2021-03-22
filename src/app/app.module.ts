import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxDataTableModule } from 'angular-9-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeladosservidorComponent } from './components/heladosservidor/heladosservidor.component';
import { SaboresservidorComponent } from './components/saboresservidor/saboresservidor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
import { HeladoscliComponent } from './components/heladoscli/heladoscli.component';
import { SaborescliComponent } from './components/saborescli/saborescli.component'
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeladosservidorComponent,
    SaboresservidorComponent,
    LoginComponent,
    HeladoscliComponent,
    SaborescliComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   NgxDataTableModule ,
   HttpClientModule,
   AngularFireStorageModule,
   
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
