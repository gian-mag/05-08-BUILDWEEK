import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardserviceService } from '../cardservice.service';
import { Card } from '../list';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {

  cards: Card[] = [];

  sub!: Subscription;

  constructor(private card$: CardserviceService) { }

  ngOnInit(): void {
    this.card$.arrayLikedGet();
    this.sub = this.card$.obs.subscribe((res)=>{
    this.cards = res
    console.log(this.cards)})
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
