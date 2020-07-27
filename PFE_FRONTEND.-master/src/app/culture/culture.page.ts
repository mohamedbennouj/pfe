import { Component, OnInit } from '@angular/core';
import { MonumentService } from '../services/monument/monument.service';
import { PlaceModel } from '../_models/place.model';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.page.html',
  styleUrls: ['./culture.page.scss'],
})
export class CulturePage implements OnInit {
  places : PlaceModel[];
  title: string;

  constructor(private monumentService: MonumentService) {
  }

  ngOnInit() {
    this.title = "culture";
    this.monumentService.getAll('culture').subscribe(rsp => {
      
      console.log(rsp);
      this.places = rsp.data;
    }, err => console.log(err));
  }

}