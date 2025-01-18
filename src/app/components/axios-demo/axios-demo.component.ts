import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import axios from 'axios';
import { ReuseBtnComponent } from "../reuse-btn/reuse-btn.component";
@Component({
  selector: 'app-axios-demo',
  imports: [CommonModule, ReuseBtnComponent],
  templateUrl: './axios-demo.component.html',
  styleUrl: './axios-demo.component.css'
})
export class AxiosDemoComponent {
data: any[] = [];
  constructor(){
    this.getPosts();
  }
  async getPosts(){
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      this.data = response.data;
    } catch (error) {
      
    }
  }

  async createPost(data:any){
    try {
      let response = await axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data));
      alert('Post created ' + response.data.id);
    } catch (error) {
    }
  }

  buttonClick() {
    this.createPost({
      title: 'Yashwant',
      body: 'Im trying axios for the first time!',
      userId: 2704,
    });
  }
}
