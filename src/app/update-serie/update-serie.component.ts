import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Serie } from '../model/serie.model';

@Component({
  selector: 'app-update-serie',
  templateUrl: './update-serie.component.html',
  styles: []
})
export class UpdateSerieComponent implements OnInit {
  currentSerie = new Serie();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private serieService: SerieService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
this.currentSerie = this.serieService.consulterSerie(this.activatedRoute.snapshot. params['id']);
console.log(this.currentSerie);
  }
  updateSerie()
{ //console.log(this.currentSerie);
this.serieService.updateSerie(this.currentSerie);
this.router.navigate(['series']);
}


}
