import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthserviceService } from '../authservice.service';
import { CardserviceService } from '../cardservice.service';
import { AuthUser } from '../list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged!: boolean | AuthUser;
  sub!: Subscription
  constructor(private auth$: AuthserviceService) { }

  ngOnInit(): void {
    this.sub = this.auth$.authObs.subscribe((state)=>{
      this.isLogged = state;
    })
  }

  logout(): void {
    this.auth$.logout();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
