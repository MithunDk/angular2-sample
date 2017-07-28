import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-dones',
  templateUrl: './dones.component.html',

})
export class DonesComponent implements OnInit {
   bservice: TodoService;
  constructor(besservice:TodoService) {
    this.bservice = besservice;
  }


  ngOnInit() {
  }

}
