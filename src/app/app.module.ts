import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { FormsModule } from '@angular/forms';
import { UpdateSerieComponent } from './update-serie/update-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    AddSerieComponent,
    UpdateSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
