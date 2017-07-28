import { Component } from '@angular/core';
import {TodoComponent} from "./todo/todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  boss = 'what works';
  neutra: string;
  neutral =[];
  name : string = 'Mithun';
  tc: TodoComponent;

  todayDate = new Date();

  getMass() {
    //  var a: TodoComponent = new TodoComponent();
    // a.getValue();
    // this.neutral = a.cart;
    // console.log(this.neutral);
    // this.neutra = a.huge;
    // console.log(a.huge);
    console.log('boss works');
    this.boss='title works';
  }


  // var a: TodoComponent = new TodoComponent();
  // a.getValue();
  // this.neutra = a.huge;
}


