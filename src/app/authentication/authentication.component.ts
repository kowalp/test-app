import { AutenthicationService } from './../shared/services/autenthication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  emailForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private authService: AutenthicationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.emailForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    }
    this.authService.CheckEmail(this.emailForm.value.email);
  }
}
