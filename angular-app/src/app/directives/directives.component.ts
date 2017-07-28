import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
 myClassName = 'my-class';

color = 'violet';
size :number = 11;

switchValue = 20;
showNow = false;

  ngOnInit() {
  }

}
