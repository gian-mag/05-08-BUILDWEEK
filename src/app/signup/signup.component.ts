import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!: FormGroup;
  error: boolean = false;
  constructor(private auth$: AuthserviceService, public fb: FormBuilder) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password:["", [Validators.required, Validators.minLength(8)]],
    })
   }

  ngOnInit(): void {
  }
  login() {
    if(!this.form.valid) {
      console.log("not valid");
      this.error = true;
    } else {
      this.auth$.signUp(this.form.value)
      console.log(this.form.value);
      this.error = false;
    }

  }

}
