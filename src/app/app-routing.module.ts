import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { AddSerieComponent } from './add-serie/add-serie.component';
import { UpdateSerieComponent } from './update-serie/update-serie.component';

const routes: Routes = [
  {path: "series", component : SeriesComponent},
  {path: "add-serie", component : AddSerieComponent},
  { path: "", redirectTo: "series", pathMatch: "full" },
  {path: "updateSerie/:id", component: UpdateSerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
