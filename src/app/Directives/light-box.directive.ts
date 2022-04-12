import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  // private elemRef: ElementRef;
  // @Input() highlightColor:string="red";
  @Input('LightBox') highlightColor:string="red";
  @Input() defaultColor:string="blue";
  constructor(private elemRef: ElementRef) {
    // this.elemRef=elemRef;
    elemRef.nativeElement.style.border=`2px ${this.defaultColor} solid`;
   }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.elemRef.nativeElement.style.border=`4px ${this.highlightColor} solid`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.border=`2px ${this.defaultColor} solid`;
  }
}
