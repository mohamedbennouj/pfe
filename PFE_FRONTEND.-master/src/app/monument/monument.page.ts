import { Component, OnInit } from '@angular/core';
import { MonumentService } from '../services/monument/monument.service';
import { PlaceModel } from '../_models/place.model';

@Component({
  selector: 'app-monument',
  templateUrl: './monument.page.html',
  styleUrls: ['./monument.page.scss'],
})
export class MonumentPage implements OnInit {
  places : PlaceModel[];
  title: string;

  constructor(private monumentService: MonumentService) {
  }

  ngOnInit() {
    this.title = "plage";
    this.monumentService.getAll('plage').subscribe(rsp => {
      
      console.log(rsp);
      this.places = rsp.data;
    }, err => console.log(err));
  }

}
