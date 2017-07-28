import {Directive, ElementRef, Input, HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  eRef:ElementRef;


@Input('appHighlight') color="yellow";
@Input('font') font="";
  @Input () textColor="blue";

  constructor( eRef : ElementRef) {
    this.eRef = eRef;
    this.eRef.nativeElement.style.fontSize="40px";
  }

  ngAfterViewInit(){
    this.eRef.nativeElement.style.backgroundColor = this.color;
    this.eRef.nativeElement.style.fontSize= this.font;
    this.eRef.nativeElement.style.color= this.textColor;

  }
  @HostListener('click') clickHandler(){

  }
}

