// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent {
//   public ingredients:any = {
//     tomates:["s. tomate", "filet de tomate"],
//     quesos:["mozzarella", "bufala", "reblochon", "bournette", "bleu de vercors", "ossau iraty", "cheddar", "parmesan", "st marcellin", "sainte-maure"],
//     carnes:["jambon sec", "viande hachee", "poitrine fumee", "chorizo", "oeuf","poulet", "jambon blanc" ],
//     pescados:["saumon", "cabillaud"],
//     especias:["curry de madras", "cumin", "origan", "piment d'espelette", "sauce tartare","miel", "oignon frit", "noix", "thym seche"],
//     vegetales:["champignons", "f. oignons", "des de tomate", "huile basilic", "poivron", "ciboulette", "roquette"],
//     pastas:["ravioles"],
//     cremas :["s. creme", "filet de creme"]
//   };

//   @Output() ingredientSelected = new EventEmitter<any>();

//   selectIngredient(ingredient: any) {
//     this.ingredientSelected.emit(ingredient);
//   }
// }


import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public ingredients: any = {
    tomates: ["s. tomate", "filet de tomate"],
    quesos: ["mozzarella", "bufala", "reblochon", "bournette", "bleu du vercors", "ossau iraty", "cheddar", "parmesan (AC)", "st marcellin", "sainte-maure"],
    carnes: ["jambon sec", "viande hachee", "poitrine fumee", "chorizo", "jambon blanc", "poulet", "oeuf"],
    pescados: ["saumon", "cabillaud"],
    especias: ["curry de madras", "cumin", "origan", "piment d'espelette", "sauce tartare (AC)", "oignon frit (AC)", "thym seche", "miel", "noix (AC)"],
    vegetales: ["champignons", "f. oignons", "des de tomate", "huile basilic", "poivron", "ciboulette", "roquette (AC)"],
    pastas: ["ravioles"],
    cremas: ["s. creme", "filet de creme"]
  };

  @Output() ingredientSelected = new EventEmitter<string>();

  selectIngredient(ingredient: string) {
    this.ingredientSelected.emit(ingredient);
  }
}

