import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightSelectedIngredient]'
})
export class HighlightSelectedIngredientDirective implements OnChanges {
  @Input() selectedIngredient: string = '';
  @Input() ingredientValue: string = '';
  @Input() highlightClass: string = 'highlight';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedIngredient'] || changes['ingredientValue']) {
      this.updateClass();
    }
  }

  private updateClass() {
    if (this.selectedIngredient === this.ingredientValue) {
      this.renderer.addClass(this.el.nativeElement, this.highlightClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.highlightClass);
    }
  }
}
