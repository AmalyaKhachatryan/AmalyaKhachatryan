import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  
  }
prop="" as any

func(){
  console.log(this.prop);
  
}



deletdata(){
  this.prop= "";
 
}
}
