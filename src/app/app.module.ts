import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightIngredientDirective } from './directives/highlight-ingredient.directive';
import { HighlightRedDirective } from './directives/highlight-red.directive';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MainComponent } from './shared/main/main.component';

@NgModule({
  declarations: [
    HighlightIngredientDirective,
    HighlightRedDirective,
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    HighlightIngredientDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
