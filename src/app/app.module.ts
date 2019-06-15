import { AutenthicationService } from './shared/services/autenthication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { YoutubeDetailsComponent } from './main/youtube-details/youtube-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthenticationComponent,
    LogInComponent,
    YoutubeDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AutenthicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
