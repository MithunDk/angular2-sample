import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';
import {isNumber} from "util";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class TodoService {

  todoList : Todo[]= [];
  deleteArr =[];
  constructor() { }

  addTodo(todoName){
    var todoObj: Todo = new Todo(this.todoList.length,todoName,false );
    this.todoList.push(todoObj);
   }
   delete(id:number){
     this.todoList.forEach(element =>{
     if(element.todoId == id){
       this.deleteArr.push(element);
     }
   })
     console.log(this.deleteArr);
     this.todoList = this.todoList.filter(todo => todo.todoId !== id);
   }

}
