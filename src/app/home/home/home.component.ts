import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    {path: '../../../assets/fotos/Preview1.jpeg'},
    {path: '../../../assets/fotos/Preview2.jpeg'},
    {path: '../../../assets/fotos/Preview3.jpeg'},
    {path: '../../../assets/fotos/Preview4.jpeg'},
]

}
