import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightRed]'
})
export class HighlightRedDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  highlight(element: HTMLElement, color: string) {
    this.renderer.setStyle(element, 'border', `2px solid ${color}`);
    setTimeout(() => {
      this.renderer.removeStyle(element, 'border');
    }, 1300);
  }

}
