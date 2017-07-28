/**
 * Created by mithun.dk on 7/27/2017.
 */
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DirectivesComponent } from './directives/directives.component';
import {AppComponent} from './app.component';
import { EditComponent } from './edit/edit.component';
import { DoneComponent } from './done/done.component';
import { TODO_SUBROUTES } from './todo/todosubrouting';


const TODO_ROUTES : Routes =
  [
     {path:'home', component: AppComponent},
    // { path:"",component:AppComponent},
    {path:'todo', component:TodoComponent, children:TODO_SUBROUTES},
    {path:'home/todo',component:TodoComponent},
    {path:'directive', component:DirectivesComponent},
    {path:'editTodo/:name', component: EditComponent},
    {path:'doneTodo', component: DoneComponent}


  ];
 export const RoutesProvider = RouterModule.forRoot(TODO_ROUTES) ;
