import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from './todo';
import { HttpService } from '../http.service';
import { Response } from '@angular/http'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 hservice: HttpService;
 tservice:TodoService;
  constructor( tserviceInjected : TodoService, hservice:HttpService) {
    this.tservice = tserviceInjected;
    this.hservice = hservice;
  }
 huge:string = 'not works';
  public names = [];
  public cart = [];
  resp: any;

  add(names){

    this.tservice.addTodo(names);

    this.hservice.getData().subscribe((res: Response) =>{
      console.log(res.json());
      this.resp =res;

  })
  }
deleteTodo(carts: Todo){
    this.tservice.delete(carts.todoId);
}
   getValue(){
    console.log('hiring');

     // this.huge = 'not works';
  }
  ngOnInit() {
  }

}
