import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userForm :FormGroup;

  constructor( private route:Router){
    this.userForm = new FormGroup({
      firstName : new FormControl(""),
      lasatName : new FormControl(""),
      userName : new FormControl(""),
      city : new FormControl(""),
      state : new FormControl(""),
      zipcode : new FormControl(""),
      phone : new FormControl("")
    })
  }

  webpageclk(){
    this.route.navigate(['./sample'])
  }

}
