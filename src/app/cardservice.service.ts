import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Card } from './list';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  arrayMovies: Card[] = []
  arrayLiked: any[] = [];

  favResults: any[] = []

  url = "http://localhost:4201/";

  sub = new BehaviorSubject<Card[]>([])
  obs = this.sub.asObservable()

  subFav = new Subject<any[]>();
  obsFav = this.subFav.asObservable();


  constructor(private http: HttpClient) {

  }

  getArrayLiked(id: number | null) {
    this.favResults = [];
    let movieId = this.arrayLiked.filter((res) => res.userId == id);
    for(let i = 0; i < movieId.length; i++) {
      this.favResults.push(this.arrayMovies.filter((res) => res.id == movieId[i].movieId))

    }
    return this.favResults;
  }

  arrayMoviesGet() {

    this.http.get<Card[]>(this.url + "movies-popular").subscribe((posts) => {
      console.log(posts, "stringa")
      this.arrayMovies = posts;
      this.sub.next(this.arrayMovies)

    })

  }
  arrayLikedGet() {
    this.http.get<any[]>(this.url + "favorites").subscribe((posts) => {
      console.log(posts, "stringa2");
      this.arrayLiked = posts;
      this.subFav.next(this.arrayLiked)
    })


  }

}
