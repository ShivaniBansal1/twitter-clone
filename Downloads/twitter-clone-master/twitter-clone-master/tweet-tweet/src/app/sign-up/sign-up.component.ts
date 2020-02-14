import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isDisabled: Boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleDisabled(eventName, eventPhone, eventDOB, eventUsername, eventEmail, eventPassword):void{
    if(eventName.value.trim().length !== 0 && eventDOB.value.trim().length !== 0 && eventPhone.value.trim().length !== 0 && eventUsername.value.trim().length !== 0 && eventEmail.value.trim().length !== 0 && eventPassword.value.trim().length !== 0 ){
      this.isDisabled = false;
    }
  }

}
