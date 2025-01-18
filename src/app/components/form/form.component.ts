import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'register-form',
  imports: [ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
signUpUser() {
  this.users.push(this.signUpObj);
  localStorage.setItem('users', JSON.stringify(this.users));
  this.signUpObj = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  };
  alert(`User ${this.signUpObj.fname} registered!`);
}
  users : any[] = [];
  signUpObj: any = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    fname: '',
    lname: '',
    password: ''
  };

}
