import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "src/app/app-routing.module";
import { ActivatedRoute, EventType, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  mostrarBotaoVoltar : boolean = false;
  
  constructor(
    private readonly router : Router
  ){
    this.router.events
      .pipe(filter(event => event.type == EventType.NavigationEnd))
      .subscribe((event) => {
        if(event instanceof NavigationEnd)
          this.mostrarBotaoVoltar = event.urlAfterRedirects !== '/';
      });
  }
  
}
