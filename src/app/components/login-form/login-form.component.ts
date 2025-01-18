import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login-form',
  imports: [ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  users: { fname: string; lname: string; email: string; password: string }[] = []; // Users array
  signUpObj = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  }; // Signup object
  loginObj = {
    fname: '',
    lname: '',
    password: '',
  }; // Login object

  ngOnInit(): void {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers); // Load users from localStorage
    } else {
      this.users = []; // Initialize an empty array if no users are stored
    }
  }
  

  loginUser() {
    const loginbtn = document.getElementById('login-btn')!;
    // Load users from localStorage (in case they were updated elsewhere)
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  
    // Find the user in the array
    const userExists = this.users.find(
      (user) =>
        user.fname.trim().toLowerCase() === this.loginObj.fname.trim().toLowerCase() &&
        user.password === this.loginObj.password
    );
  
    if (userExists) {
      loginbtn.innerHTML = "Loading";
      alert(`User ${userExists.fname} logged in`);
      loginbtn.innerHTML = "Login";
      window.location.href = 'https://www.youtube.com';
    } else {
      const user = this.users.find(
        (user) => user.fname.trim().toLowerCase() === this.loginObj.fname.trim().toLowerCase()
      );
      if (user) {
        alert('Wrong Password');
      } else {
        alert(`User ${this.loginObj.fname} not found`);
      }
    }
  }

  registerUser() {
    this.users.push({ ...this.signUpObj }); // Add the new user
    localStorage.setItem('users', JSON.stringify(this.users)); // Save to localStorage
    alert('User registered successfully');
    this.signUpObj = {
      fname: '',
      lname: '',
      email: '',
      password: '',
    };
  }
}
