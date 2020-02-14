import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  isDisabled: Boolean = true;

  constructor() { }

  toggleDisabled(eventEmail, eventPassword):void{
    if(eventEmail.value.trim().length !== 0 && eventPassword.value.trim().length !== 0){
      this.isDisabled = false;
    }
  }
  

}
