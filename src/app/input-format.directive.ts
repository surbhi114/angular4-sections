import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  // if there is only one property, you can use the name of the directive as its alias

  constructor(private el: ElementRef) {
   }

  // @HostListener('focus')
  // onFocus(){
  //   console.log("focussed");
  // }

  @HostListener('blur')
  onBlur(){
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
