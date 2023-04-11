import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';



@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private loginsvc: LoginService, private fb:FormBuilder) {}


  //la propiedad form se debe inicializar con un formbuilder para
  //que tome a los valores designado como any

  form:FormGroup = this.fb.group({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.maxLength(50)
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50)
    ]),
  })

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const userData = {
        email: this.email?.value,
        password: this.password?.value,
      };
      this.loginsvc.login(userData).subscribe((res) => console.log('Login'));
    }
  }
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }



  //   loginform=this.formbuilder.group({
  //     email:['jorge@mail.cl',[Validators.required,Validators.email]],
  //     password:['',Validators.required]
  //   })
  //   constructor(private formbuilder:FormBuilder,private router:Router, private loginservice:LoginService){}

  // get email(){
  //   return this.loginform.controls.email
  // }
  // get password(){
  //   return this.loginform.controls.password
  // }

  // login(){
  //   if(this.loginform.valid)
  //   {
  //     this.loginservice.login(this.loginform.value as loginrequest).subscribe({
  //       next : (userdata) => {
  //         console.log(userdata);
  //       },
  //       error :(errordata) => {
  //         console.error(errordata);
  //       },
  //       complete : () => {
  //         console.info("Login Complete");
  //       }

  //     })
  //     this.router.navigateByUrl('/inicio')
  //     this.loginform.reset();
  //   }
  //   else{
  //     this.loginform.markAllAsTouched();
  //     alert("error al ingresar los datos")
  //   }

  // }
}
