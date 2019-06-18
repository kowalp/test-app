import { LazyLoadingDirective } from './shared/directive/lazyLoading.directive';
import { RequestsService } from './shared/services/requests.service';
import { AutenthicationService } from './shared/services/autenthication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { YoutubeDetailsComponent } from './main/youtube-details/youtube-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthenticationComponent,
    LogInComponent,
    YoutubeDetailsComponent,
    LazyLoadingDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AutenthicationService, AuthGuard, RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
