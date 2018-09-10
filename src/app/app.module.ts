import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule  , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './auth/training/training.component';
import { CurrentTrainingComponent } from './auth/training/current-training/current-training.component';
import { NewTrainingComponent } from './auth/training/new-training/new-training.component';
import { PastTrainingComponent } from './auth/training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { DialogComponent } from './auth/training/current-training/dialog.component';
import { AuthService } from './auth/auth.service';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './helpers/fake-backend';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { UserService } from './user.service';
import { OptInComponent } from './welcome/opt-in/opt-in.component';
import { BroadcastComponent } from './welcome/broadcast/broadcast.component';
import { TestComponent } from './test/test.component';
import { FileUtil } from './test/file.util';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    DialogComponent,
    LandingComponent,
    OptInComponent,
    BroadcastComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [AuthService,UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    FileUtil
    // { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
   ],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }
