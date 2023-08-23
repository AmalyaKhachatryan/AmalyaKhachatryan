import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { MaineSService } from '../../services/maine-s.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private maineSService: MaineSService, private router: Router) {
  }
  
  profileForm = new FormGroup({
    firstname: new FormControl ('', Validators.required),
    lastname: new FormControl('', Validators.required),
    displayname: new FormControl('', Validators.required),
    email: new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    checkbox: new FormControl ('')
  })

  registeredUsers: any[] = []

  users: any = {
    firstname:"",
    lastname:"",
    displayname:"",
    email: " ",
    password: " ",
    checkbox:'',
  }

  bool = false;



  ngOnInit(): void {
    // this.maineSService.getUsers();
   }

  register() {

    this.registeredUsers.push(this.profileForm.value);
    localStorage.setItem('registeredUsers', JSON.stringify(this.registeredUsers))
    this.users = {
      firstname:"",
      lastname:"",
      displayname:"",
      email: " ",
      password: " ",
      checkbox: "",
    }
    console.log(this.registeredUsers);
    
  }



  get email(): any { return this.profileForm.get('email'); }
  deletei() { this.email.reset()}

 

}


