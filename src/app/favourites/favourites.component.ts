import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from '../authservice.service';
import { CardserviceService } from '../cardservice.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favCards: any[] = [];

  constructor(private card$: CardserviceService, private auth$: AuthserviceService) { }

  ngOnInit(): void {
    this.card$.arrayLikedGet();
    this.favCards = this.card$.getArrayLiked(this.auth$.userId)
    console.log(this.favCards)
  }

}
