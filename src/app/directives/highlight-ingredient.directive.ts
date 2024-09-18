import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightIngredient]'
})
export class HighlightIngredientDirective implements OnChanges {
  @Input() appHighlightIngredient!: string;
  @Input() visibleIngredients!: string[];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    console.log('Changes detected:', this.appHighlightIngredient, this.visibleIngredients);
    if (this.visibleIngredients.includes(this.appHighlightIngredient)) {
      this.applyClass(this.appHighlightIngredient);
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'carnes');
      this.renderer.removeClass(this.el.nativeElement, 'tomates');
      this.renderer.removeClass(this.el.nativeElement, 'quesos');
      this.renderer.removeClass(this.el.nativeElement, 'pescados');
      this.renderer.removeClass(this.el.nativeElement, 'especias');
      this.renderer.removeClass(this.el.nativeElement, 'vegetales');
      this.renderer.removeClass(this.el.nativeElement, 'pastas');
      this.renderer.removeClass(this.el.nativeElement, 'cremas');
    }
  }

  private applyClass(ingredient: string) {
    let className: string;
    if (['s. tomate', 'filet de tomate'].includes(ingredient)) {
      className = 'tomates';
    } else if (['mozzarella', 'bufala', 'reblochon', 'bournette', 'bleu du vercors', 'ossau iraty', 'cheddar', 'parmesan (AC)', 'st marcellin', 'sainte-maure'].includes(ingredient)) {
      className = 'quesos';
    } else if (['jambon sec', 'viande hachee', 'poitrine fumee', 'chorizo', 'jambon blanc', 'poulet', 'oeuf'].includes(ingredient)) {
      className = 'carnes';
    } else if (['saumon', 'cabillaud'].includes(ingredient)) {
      className = 'pescados';
    } else if (['curry de madras', 'cumin', 'origan', 'piment d\'espelette', 'sauce tartare (AC)', 'oignon frit (AC)', 'thym seche', 'miel', 'noix (AC)'].includes(ingredient)) {
      className = 'especias';
    } else if (['champignons', 'f. oignons', 'des de tomate', 'huile basilic', 'poivron', 'ciboulette', 'roquette (AC)'].includes(ingredient)) {
      className = 'vegetales';
    } else if (['ravioles'].includes(ingredient)) {
      className = 'pastas';
    } else if (['s. creme', 'filet de creme'].includes(ingredient)) {
      className = 'cremas';
    } else {
      className = '';
    }
    this.renderer.addClass(this.el.nativeElement, className);
  }
}
