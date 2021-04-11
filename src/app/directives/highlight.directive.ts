import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  ref: ElementRef;
  @Input() searchPhrase = "";

  constructor(private eleRef: ElementRef) { 
    this.ref = eleRef;
  }

  ngAfterContentInit() {
    const elem: HTMLElement = this.ref.nativeElement;
    const content = elem.innerHTML;

    const startIndex = content.toUpperCase().indexOf(this.searchPhrase.toUpperCase());
    if(startIndex !== -1) {
      const endIndex = startIndex + this.searchPhrase.length;
      const prefix = content.slice(0, startIndex);
      const highlighted = content.slice(startIndex, endIndex);
      const suffix = content.slice(endIndex);
  
      elem.innerHTML = `${prefix}<span class="highlight">${highlighted}</span>${suffix}`;
    } else {  
      elem.innerHTML = content
    };
  }
}
