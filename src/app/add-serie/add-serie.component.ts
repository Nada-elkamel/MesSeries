import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie.model';
import { SerieService } from '../services/serie.service';
@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {
  newSerie = new Serie();
  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
  }
  addSerie(){
    //console.log(this.newSerie);
    this.serieService.ajouterSerie(this.newSerie);
    }
    

}
