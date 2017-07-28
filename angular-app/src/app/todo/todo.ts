/**
 * Created by mithun.dk on 7/27/2017.
 */

export class Todo{

  todoId:number;
  todoName: string;
  done: boolean;

  constructor(tId:number,tName:string,done:boolean){
    this.todoId=tId;
    this.todoName = tName;
    this.done = done;
  }
}
