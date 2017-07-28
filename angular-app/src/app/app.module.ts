import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './service/todo.service';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { MyIfDirective } from './my-if.directive';
import { RoutesProvider } from './todorouting';
import { EditComponent } from './edit/edit.component';
import { DoneComponent } from './done/done.component';
import { EditsComponent } from './todo/edits.component';
import { DonesComponent } from './todo/dones.component';
import { SalutePipe } from './salute.pipe';
import {HttpService} from "./http.service";
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DirectivesComponent,
    HighlightDirective,
    MyIfDirective,
    EditComponent,
     DoneComponent,
    EditsComponent,
    DonesComponent,
    SalutePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [TodoService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
