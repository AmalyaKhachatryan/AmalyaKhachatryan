import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent {

  tab=1
  click(){

  }

  accountForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required, Validators.email]),
    LastName: new FormControl(''),
    DisplayName: new FormControl(''),
    EmailAddress: new FormControl(''),
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmNewPassword: new FormControl(''),
  }
  )

  saveChanges(){
    console.log(this.accountForm.value);
    
  }

}
