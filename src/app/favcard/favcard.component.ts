import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favcard',
  templateUrl: './favcard.component.html',
  styleUrls: ['./favcard.component.scss']
})
export class FavcardComponent implements OnInit {

  @Input() favCard!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
