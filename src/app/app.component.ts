import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise_1';
  display = ''
  val = 0
  disable = false
  name = 'sunil'
  show = 'hii'
  // color = '222'
  users = ['anil', 'akhtar', 'taufeeq']
  userDetails = [
    { name: 'anil', email: 'anil@gmail.com', phone: '123', social: [1, 2, 3, 4] },
    { name: 'akhtar', email: 'akhtar@gmail.com', phone: '345', social: [1, 2, 3, 4] },
    { name: 'taufiq', email: 'taufeeq@gmail.com', phone: '678', social: [1, 2, 3, 4] }
  ]
  color = 'red'
  bgColor = 'green'
  todoList: any[] = []
  data: any = 10;
  name2: any;
loginForm = new FormGroup({
  user : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  password : new FormControl('',[Validators.minLength(6),Validators.required])
})

  userDetails1 = [
    { name: 'anil', age: 20 },
    { name: 'sahil', age: 27 },
    { name: 'sohel', age: 50 }
  ]

  getName(name: any, name2: string) {
    alert(name);
    alert(name2)
  };
  getNumber() {
    alert('u click on the number')
  };
  getValue(val: string) {
    console.warn(val)
    this.display = val
  }
  deVal(type: string) {
    type == 'plus' ? this.val++ : this.val--
  }
  changePro() {
    this.color = 'green';
    this.bgColor = 'red'
  }
  toggle() {
    this.disable = !this.disable
  };
  addTodo(value: any) {
    this.todoList.push({ id: this.todoList.length, name: value })
  }
  remove(id: number) {
    this.todoList = this.todoList.filter(item => item.id !== id)
  }
  updateChild() {
    this.data = Math.floor(Math.random() * 10)
  }
  updateData(item: string) {
    console.log(item)
    this.data = item
  }
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
