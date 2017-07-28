import { Directive, ViewContainerRef, ElementRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
vcRef : ViewContainerRef;
templateRef: TemplateRef<any>;
eRef: ElementRef;

  @Input('appMyIf') set appMyIf (status: boolean) {
    if (status) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }

    constructor(vcRef:ViewContainerRef,templateRef: TemplateRef<any>,eRef:ElementRef) {
      this.vcRef = vcRef;
      this.templateRef = templateRef;
      this.eRef = eRef;

  }

}
