import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
   bservice: TodoService;
  constructor(besservice:TodoService) {
    this.bservice = besservice;
  }


  ngOnInit() {
  }

}
