import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  route: Router;
  constructor(private router: Router) {
    this.route = router;
   }

  ngOnInit(): void {
  }

}
