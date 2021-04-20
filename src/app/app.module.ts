import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './views/peliculas/peliculas.component';
import { HeaderComponent } from './layout/header/header.component';
import { ApplicationpipesModule } from './pipes/applicationpipes.module';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationpipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
