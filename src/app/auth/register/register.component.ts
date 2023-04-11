import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators,ValidatorFn,AbstractControl,ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor (private router:Router,registersvc:RegisterService, private fb:FormBuilder){}

  checkPasswords: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = this.password;
    const confirmPassword = this.Rpassword;

    return password?.value === confirmPassword?.value? null
: { notmatched: true };
  };

  registerform : FormGroup= this.fb.group(
    {
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    Rpassword: new FormControl('', [Validators.required]),
  },
  { validators: this.checkPasswords }
  );

  /* GET INPUTS FROM FORM */
  get email() {
    return this.registerform.get('email');
  }

  get password() {
    return this.registerform?.get('password');
  }

  get Rpassword() {
    return this.registerform?.get('Rpassword');
  }

  submit(){
    if (this.registerform.valid){
    const userdata = {
      email:this.email?.value,
      password:this.password?.value
    };
    }


  }

}

