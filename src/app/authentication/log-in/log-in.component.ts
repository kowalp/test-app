import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenthicationService } from 'src/app/shared/services/autenthication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email = false;
  passwordForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private authService: AutenthicationService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    if (localStorage.getItem('email') !== null) {
      this.email = true;
    }
  }
  get f() { return this.passwordForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }
    this.authService.CheckPassword(this.passwordForm.value.password);
  }
}
