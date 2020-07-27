import { Component, OnInit } from '@angular/core';
import { MonumentService } from '../services/monument/monument.service';
import { PlaceModel } from '../_models/place.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  places : PlaceModel[];
  title: string;

  constructor(private monumentService: MonumentService) {
  }

  ngOnInit() {
    this.title = "shopping";
    this.monumentService.getAll('shopping').subscribe(rsp => {
      
      console.log(rsp);
      this.places = rsp.data;
    }, err => console.log(err));
  }

}

