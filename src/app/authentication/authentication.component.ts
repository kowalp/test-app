import { AutenthicationService } from './../shared/services/autenthication.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent implements OnInit {
  emailForm = new FormGroup({
    email: new FormControl('emailValidation', [Validators.required, Validators.email, Validators.minLength(6)])
  });
  @Output() goodValueEmail = new EventEmitter<>();
  email: string;

  constructor(private router: Router, private authService: AutenthicationService) { }
  ngOnInit() {
      this.authService.CheckEmail()
      .subscribe(
        (data) => {
           console.log(data);
       });
  }
  onSubmit() {
    // if(this.email === )
    this.goodValueEmail.emit(this.email);
    this.router.navigate(['password']);
  }
}
