import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MaineSService } from '../../services/maine-s.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

// static passwordMatching (control: AbstractControl):ValidationErrors | null {
//   const password = control.get("password")?.value;
//   const passwordConfirm = control.get("passwordConfirm")?.value


//   if ((password===passwordConfirm)&&(password !==null && passwordConfirm !==null)){
//     return null;
//   }else{
//     return{passwordNoMatching: true};
//   }
// }


  constructor(private maineSService: MaineSService, private router: Router) {
    
  // setErrors(errore:ValidationErrors,opts:{emitEvent?:boolean;}={}):void
  }

  profileForm = new FormGroup({
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    checkbox: new FormControl ('')
  }
  )
  // FAKE_VALUE


  user: any = {
    email: " ",
    password: " ",
    checkbox:'',
  }
 
  
  bool = false;

  activUser: any = [];


  ngOnInit(): void {
  }

  signinfunc() {
     if (this.profileForm.status==='INVALID') return 
    
    let users: any = localStorage.getItem("registeredUsers")
    const parsedUsers = JSON.parse(users)
    let x = parsedUsers.some((x: any) => x.email === this.profileForm.value.email && x.password === this.profileForm.value.password)
    console.log(parsedUsers);
    console.log(x);
   

    if (x) {
     this.router.navigateByUrl("/account")
     } 
    }


  saveData() {
    this.activUser.push(this.user)
    localStorage.setItem("activUser", JSON.stringify(this.activUser))
  }

  

  get email(): any { return this.profileForm.get('email'); }
  get password(): any { return this.profileForm.get('password'); }
  deletei() { this.email.reset(); this.password.reset(); }




  
}
