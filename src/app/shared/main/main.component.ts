// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrls: ['./main.component.css']
// })
// export class MainComponent {

//   public gameStarted: boolean = false;
//   public inGame: boolean = false;
//   public countdown: number = 0;
//   public selectedIngredient: any = '';
//   public pizzas = [
//     { nombre: "4 fromages", listaIngredientes: ["s. tomate","mozzarella","reblochon","bournette","bleu du vercors","origan"], ingredientesVisibles: [] },
//     { nombre: "Barboteuse", listaIngredientes: ["s. creme","mozzarella","saumon","huile basilic", "roquette (AC)"], ingredientesVisibles: [] },
//     { nombre: "Basque", listaIngredientes: ["s. tomate", "mozzarella", "jambon sec", "ossau iraty" ,"ciboulette" ,"piment d'espelette"] , ingredientesVisibles: []},
//     { nombre: "Bourguignonne", listaIngredientes: ["s. tomate", "mozzarella", "viande hachee", "f. oignons" ,"filet de creme" ,"origan"] , ingredientesVisibles: []},
//     { nombre: "Bournette", listaIngredientes: ["s. creme", "mozzarella", "champignons", "poitrine fumee", "bournette", "ciboulette"], ingredientesVisibles: [] },
//     { nombre: "Brexiteuse", listaIngredientes: ["s. tomate", "mozzarella", "viande hachee", "poitrine fumee" ,"cheddar" ,"f. oignons"], ingredientesVisibles: [] },
//     { nombre: "Cabillud", listaIngredientes: ["s. creme", "mozzarella", "cabillaud" ,"champignons", "ciboulette"], ingredientesVisibles: [] },
//     { nombre: "Campagnarde", listaIngredientes: ["s. creme" ,"mozzarella", "champignons", "poulet", "ciboulette"] , ingredientesVisibles: []},
//     { nombre: "Chorizana", listaIngredientes: ["s. tomate", "mozzarella", "chorizo", "f. oignons", "origan"] , ingredientesVisibles: []},
//     { nombre: "Chorizana di bufala", listaIngredientes: ["s. tomate", "chorizo", "f. oignons", "bufala", "origan"] , ingredientesVisibles: []},
//     { nombre: "Dromoise", listaIngredientes: ["s. creme", "mozarella", "ravioles", "bleu du vercors", "origan"], ingredientesVisibles: [] },
//     { nombre: "Fish & chips", listaIngredientes: ["s. creme", "mozzarella", "cabillaud", "ciboulette", "sauce tartare (AC)", "oignon frit (AC)"], ingredientesVisibles: [] },
//     { nombre: "Italianne", listaIngredientes: ["mozzarella", "filet de tomate", "des de tomate", "huile basilic", "roquette (AC)", "parmesan (AC)"], ingredientesVisibles: [] },
//     { nombre: "Madras", listaIngredientes: ["s. creme", "curry de madras", "mozzarella", "poulet", "poivron", "ciboulette"], ingredientesVisibles: [] },
//     { nombre: "Marcelline", listaIngredientes: ["s. creme", "mozzarella", "poitrine fumee", "st marcellin", "ciboulette"], ingredientesVisibles: [] },
//     { nombre: "Marguerita di bufala", listaIngredientes: ["s. tomate", "bufala", "huile basilic"] , ingredientesVisibles: []},
//     { nombre: "Marguerite", listaIngredientes: ["mozzarella", "filet de tomate", "des de tomate", "huile basilic"], ingredientesVisibles: [] },
//     { nombre: "Mediterranenne", listaIngredientes: ["s. tomate", "mozzarella", "poivron", "f. oignons", "thym seche", "piment d'espelette", "roquette (AC)"], ingredientesVisibles: [] },
//     { nombre: "Meridionale", listaIngredientes: ["s. tomate", "mozzarella", "jambon sec", "huile basilic", "roquette (AC)", "parmesan"], ingredientesVisibles: [] },
//     { nombre: "Montagnarde", listaIngredientes: ["s. tomate", "mozzarella", "jambon sec", "bleu du vercors", "roquette (AC)"] , ingredientesVisibles: []},
//     { nombre: "Nordique", listaIngredientes: ["s. creme", "mozzarella", "saumon", "ciboulette"] , ingredientesVisibles: []},
//     { nombre: "Orientale", listaIngredientes: ["s. tomate", "cumin", "mozzarella", "poulet", "f. oignons", "miel"], ingredientesVisibles: [] },
//     { nombre: "Provencale", listaIngredientes: ["s. tomate", "mozzarella", "poulet", "poivron", "thym seche"], ingredientesVisibles: [] },
//     { nombre: "Reine", listaIngredientes: ["s. tomate", "mozzarella", "jambon blanc", "champignons", "huile basilic"] , ingredientesVisibles: []},
//     { nombre: "Romaine", listaIngredientes: ["s. tomate", "mozzarella", "jambon blanc", "huile basilic"] , ingredientesVisibles: []},
//     { nombre: "Royale", listaIngredientes: ["s. tomate", "mozzarella", "jambon blanc", "champignons", "oeuf", "origan"] , ingredientesVisibles: []},
//     { nombre: "Reine di bufala", listaIngredientes: ["s. tomate", "jambon blanc", "chapignons", "bufala", "huile basilic" ] , ingredientesVisibles: []},
//     { nombre: "Saint-Jean", listaIngredientes: ["s. creme", "mozzarella", "ravioles", "ciboulette"], ingredientesVisibles: [] },
//     { nombre: "Sante-Maure", listaIngredientes: ["s. tomate", "mozzarella", "sainte-maure", "miel", "thym seche"], ingredientesVisibles: [] },
//     { nombre: "Savoyarde", listaIngredientes: ["s. creme", "mozzarella", "poitrine fumee", "reblochon", "f. oignons"], ingredientesVisibles: [] },
//     { nombre: "Tartare", listaIngredientes: ["mozzarella", "filet de tomate", "des de tomate", "viande hachee", "sauce tartare (AC)", "oignons frit (AC)"], ingredientesVisibles: [] },
//     { nombre: "Terre & mer", listaIngredientes: ["s. tomate", "mozzarella", "cabillaud", "chorizo", "poivron", "ciboulette"], ingredientesVisibles: [] },
//     { nombre: "Touraine", listaIngredientes: ["s. creme", "mozzarella", "jambon sec", "sainte-maure", "ciboulette", "noix (AC) "] , ingredientesVisibles: []},
//     { nombre: "Vegetale", listaIngredientes: ["s. tomate", "champignons", "poivron", "f. oignons", "huile basilic", "roquette (AC)"], ingredientesVisibles: [] },
//     { nombre: "Vegetarienne di bufala", listaIngredientes: ["s. tomate", "champignons", "poivron", "f. oignons", "bufala", "huile basilic"] , ingredientesVisibles: []},
//   ];
//   public randomPizzas:any = [];
//   // public ingredients:any = {
//   //   tomates:["s. tomate", "filet de tomate"],
//   //   quesos:["mozzarella", "bufala", "reblochon", "bournette", "bleu de vercors", "ossau iraty", "cheddar", "parmesan", "st marcellin", "sainte-maure"],
//   //   carnes:["jambon sec", "viande hachee", "poitrine fumee", "chorizo", "jambon blanc", "poulet", "oeuf"],
//   //   pescados:["saumon", "cabillaud"],
//   //   especias:["curry de madras", "cumin", "origan", "piment d'espelette", "sauce tartare", "oignon frit", "thym seche", "miel", "noix"],
//   //   vegetales:["champignons", "f. oignons", "des de tomate", "huile basilic", "poivron", "ciboulette", "roquette"],
//   //   pastas:["ravioles"]
//   // };

//   getRandomPizzas(): any[] {
//     const numberOfPizzas = Math.floor(Math.random() * 5) + 1;
//     const shuffled = this.pizzas.sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, numberOfPizzas);

//   }


//   startGame() {

//     this.gameStarted = true;
//     this.countdown = 3;
//     const interval = setInterval(() => {
//       this.countdown--;
//       if (this.countdown === 0) {
//         clearInterval(interval);
//         // this.addPizza();
//         this.inGame = true;
//       }
//     }, 1000);
//     this.randomPizzas = this.getRandomPizzas();
//   }

//   onIngredientSelected(ingredient: any) {
//     this.selectedIngredient = ingredient;
//   }

//   checkIngredient(pizza: any) {
//     if (pizza.listaIngredientes.includes(this.selectedIngredient)) {
//       if (!pizza.ingredientesVisibles.includes(this.selectedIngredient)) {
//         pizza.ingredientesVisibles.push(this.selectedIngredient);
//       }
//     } else {
//       alert(`El ingrediente ${this.selectedIngredient} no está en la pizza ${pizza.nombre}`);
//     }
//   }
// }



/////////////////////////////
import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { HighlightRedDirective } from 'src/app/directives/highlight-red.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedIngredient']) {
      this.applyClass();
    }
  }
  @Input() selectedIngredient: string = '';
  @ViewChild(HighlightRedDirective) highlightDirective!: HighlightRedDirective;
  public gameStarted: boolean = false;
  public inGame: boolean = false;
  public countdown: number = 0;
  public additionalClasss = '';
  public pizzas = [
      { nombre: "4 fromages", listaIngredientes: ["s. tomate","mozzarella","reblochon","bournette","bleu du vercors","origan"], ingredientesVisibles: [] },
    { nombre: "Barboteuse", listaIngredientes: ["s. creme","mozzarella","saumon","huile basilic", "roquette (AC)"], ingredientesVisibles: [] },
    { nombre: "Basque", listaIngredientes: ["s. tomate", "mozzarella", "jambon sec", "ossau iraty" ,"ciboulette" ,"piment d'espelette"] , ingredientesVisibles: []},
    { nombre: "Bourguignonne", listaIngredientes: ["s. tomate", "mozzarella", "viande hachee", "f. oignons" ,"filet de creme" ,"origan"] , ingredientesVisibles: []},
    { nombre: "Bournette", listaIngredientes: ["s. creme", "mozzarella", "champignons", "poitrine fumee", "bournette", "ciboulette"], ingredientesVisibles: [] },
    { nombre: "Brexiteuse", listaIngredientes: ["s. tomate", "mozzarella", "viande hachee", "poitrine fumee" ,"cheddar" ,"f. oignons"], ingredientesVisibles: [] },
    { nombre: "Cabillud", listaIngredientes: ["s. creme", "mozzarella", "cabillaud" ,"champignons", "ciboulette"], ingredientesVisibles: [] },
    { nombre: "Campagnarde", listaIngredientes: ["s. creme" ,"mozzarella", "champignons", "poulet", "ciboulette"] , ingredientesVisibles: []},
    { nombre: "Chorizana", listaIngredientes: ["s. tomate", "mozzarella", "chorizo", "f. oignons", "origan"] , ingredientesVisibles: []},
    { nombre: "Chorizana di bufala", listaIngredientes: ["s. tomate", "chorizo", "f. oignons", "bufala", "origan"] , ingredientesVisibles: []},
    { nombre: "Dromoise", listaIngredientes: ["s. creme", "mozzarella", "ravioles", "bleu du vercors", "origan"], ingredientesVisibles: [] },
    { nombre: "Fish & chips", listaIngredientes: ["s. creme", "mozzarella", "cabillaud", "ciboulette", "sauce tartare (AC)", "oignon frit (AC)"], ingredientesVisibles: [] },
    { nombre: "Italianne", listaIngredientes: ["mozzarella", "filet de tomate", "des de tomate", "huile basilic", "roquette (AC)", "parmesan (AC)"], ingredientesVisibles: [] },
    { nombre: "Madras", listaIngredientes: ["s. creme", "curry de madras", "mozzarella", "poulet", "poivron", "ciboulette"], ingredientesVisibles: [] },
    { nombre: "Marcelline", listaIngredientes: ["s. creme", "mozzarella", "poitrine fumee", "st marcellin", "ciboulette"], ingredientesVisibles: [] },
    { nombre: "Marguerita di bufala", listaIngredientes: ["s. tomate", "bufala", "huile basilic"] , ingredientesVisibles: []},
    { nombre: "Marguerite", listaIngredientes: ["mozzarella", "filet de tomate", "des de tomate", "huile basilic"], ingredientesVisibles: [] },
    { nombre: "Mediterranenne", listaIngredientes: ["s. tomate", "mozzarella", "poivron", "f. oignons", "thym seche", "piment d'espelette", "roquette (AC)"], ingredientesVisibles: [] },
    { nombre: "Meridionale", listaIngredientes: ["s. tomate", "mozzarella", "jambon sec", "huile basilic", "roquette (AC)", "parmesan (AC)"], ingredientesVisibles: [] },
    { nombre: "Montagnarde", listaIngredientes: ["s. tomate", "mozzarella", "jambon sec", "bleu du vercors", "roquette (AC)"] , ingredientesVisibles: []},
    { nombre: "Nordique", listaIngredientes: ["s. creme", "mozzarella", "saumon", "ciboulette"] , ingredientesVisibles: []},
    { nombre: "Orientale", listaIngredientes: ["s. tomate", "cumin", "mozzarella", "poulet", "f. oignons", "miel"], ingredientesVisibles: [] },
    { nombre: "Provencale", listaIngredientes: ["s. tomate", "mozzarella", "poulet", "poivron", "thym seche"], ingredientesVisibles: [] },
    { nombre: "Reine", listaIngredientes: ["s. tomate", "mozzarella", "jambon blanc", "champignons", "huile basilic"] , ingredientesVisibles: []},
    { nombre: "Romaine", listaIngredientes: ["s. tomate", "mozzarella", "jambon blanc", "huile basilic"] , ingredientesVisibles: []},
    { nombre: "Royale", listaIngredientes: ["s. tomate", "mozzarella", "jambon blanc", "champignons", "oeuf", "origan"] , ingredientesVisibles: []},
    { nombre: "Reine di bufala", listaIngredientes: ["s. tomate", "jambon blanc", "champignons", "bufala", "huile basilic" ] , ingredientesVisibles: []},
    { nombre: "Saint-Jean", listaIngredientes: ["s. creme", "mozzarella", "ravioles", "ciboulette"], ingredientesVisibles: [] },
    { nombre: "Sante-Maure", listaIngredientes: ["s. tomate", "mozzarella", "sainte-maure", "miel", "thym seche"], ingredientesVisibles: [] },
    { nombre: "Savoyarde", listaIngredientes: ["s. creme", "mozzarella", "poitrine fumee", "reblochon", "f. oignons"], ingredientesVisibles: [] },
    { nombre: "Tartare", listaIngredientes: ["mozzarella", "filet de tomate", "des de tomate", "viande hachee", "sauce tartare (AC)", "oignon frit (AC)"], ingredientesVisibles: [] },
    { nombre: "Terre & mer", listaIngredientes: ["s. tomate", "mozzarella", "cabillaud", "chorizo", "poivron", "ciboulette"], ingredientesVisibles: [] },
    { nombre: "Touraine", listaIngredientes: ["s. creme", "mozzarella", "jambon sec", "sainte-maure", "ciboulette", "noix (AC)"] , ingredientesVisibles: []},
    { nombre: "Vegetale", listaIngredientes: ["s. tomate", "champignons", "poivron", "f. oignons", "huile basilic", "roquette (AC)"], ingredientesVisibles: [] },
    { nombre: "Vegetarienne di bufala", listaIngredientes: ["s. tomate", "champignons", "poivron", "f. oignons", "bufala", "huile basilic"] , ingredientesVisibles: []}
  ];
  public randomPizzas: any = [];

  getRandomPizzas(): any[] {
    const numberOfPizzas = Math.floor(Math.random() * 4) + 1;
    const shuffled = this.pizzas.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfPizzas);
  }
  restartGame() {
    this.pizzas.forEach(pizza => pizza.ingredientesVisibles = []);
  }

  startGame() {
    this.gameStarted = true;
    this.countdown = 3;
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(interval);
        this.inGame = true;
      }
    }, 1000);

    this.randomPizzas = this.getRandomPizzas();
  }

  checkIngredient(pizza: any, event: Event) {
    const element = event.currentTarget as HTMLElement | null;
    if (element) {
      if (pizza.listaIngredientes.includes(this.selectedIngredient)) {
        if (!pizza.ingredientesVisibles.includes(this.selectedIngredient)) {
          pizza.ingredientesVisibles.push(this.selectedIngredient);
        }
      } else {
        this.highlightDirective.highlight(element, 'red');
      }
    }
  }


  applyClass(): void {
    if (this.selectedIngredient === 's. tomate' || this.selectedIngredient === 'filet de tomate') {
      this.additionalClasss = 'tomates';
    } else if (
      this.selectedIngredient === 'mozzarella' ||
      this.selectedIngredient === 'bufala' ||
      this.selectedIngredient === 'reblochon' ||
      this.selectedIngredient === 'bournette' ||
      this.selectedIngredient === 'bleu du vercors' ||
      this.selectedIngredient === 'ossau iraty' ||
      this.selectedIngredient === 'cheddar' ||
      this.selectedIngredient === 'parmesan (AC)' ||
      this.selectedIngredient === 'st marcellin' ||
      this.selectedIngredient === 'sainte-maure'
    ) {
      this.additionalClasss = 'quesos';
    } else if (
      this.selectedIngredient === 'jambon sec' ||
      this.selectedIngredient === 'viande hachee' ||
      this.selectedIngredient === 'poitrine fumee' ||
      this.selectedIngredient === 'chorizo' ||
      this.selectedIngredient === 'jambon blanc' ||
      this.selectedIngredient === 'poulet' ||
      this.selectedIngredient === 'oeuf'
    ) {
      this.additionalClasss = 'carnes';
    } else if (
      this.selectedIngredient === 'saumon' ||
      this.selectedIngredient === 'cabillaud'
    ) {
      this.additionalClasss = 'pescados';
    } else if (
      this.selectedIngredient === 'curry de madras' ||
      this.selectedIngredient === 'cumin' ||
      this.selectedIngredient === 'origan' ||
      this.selectedIngredient === 'piment d\'espelette' ||
      this.selectedIngredient === 'sauce tartare (AC)' ||
      this.selectedIngredient === 'oignon frit (AC)' ||
      this.selectedIngredient === 'thym seche' ||
      this.selectedIngredient === 'miel' ||
      this.selectedIngredient === 'noix (AC)'
    ) {
      this.additionalClasss = 'especias';
    } else if (
      this.selectedIngredient === 'champignons' ||
      this.selectedIngredient === 'f. oignons' ||
      this.selectedIngredient === 'des de tomate' ||
      this.selectedIngredient === 'huile basilic' ||
      this.selectedIngredient === 'poivron' ||
      this.selectedIngredient === 'ciboulette' ||
      this.selectedIngredient === 'roquette (AC)'
    ) {
      this.additionalClasss = 'vegetales';
    } else if (
      this.selectedIngredient === 'ravioles'
    ) {
      this.additionalClasss = 'pastas';
    } else if (
      this.selectedIngredient === 's. creme' ||
      this.selectedIngredient === 'filet de creme'
    ) {
      this.additionalClasss = 'cremas';
    } else {
      this.additionalClasss = '';
    }
  }

}

