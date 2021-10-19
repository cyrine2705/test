import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { BooksComponent } from './books/books.component';
import { LivreComponent } from './books/livre/livre.component';
import { LeslivresComponent } from './books/leslivres/leslivres.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    BooksComponent,
    LivreComponent,
    LeslivresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
