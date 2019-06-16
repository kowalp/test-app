import { YoutubeDetailsComponent } from './main/youtube-details/youtube-details.component';
import { LogInComponent } from './authentication/log-in/log-in.component';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth-guard';

const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login' , component: AuthenticationComponent },
    { path: 'password', component: LogInComponent },
    { path: 'youtube' , component: MainComponent, canActivate: [ AuthGuard ],  children: [
      { path: ':id', component: YoutubeDetailsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
