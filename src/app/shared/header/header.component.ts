import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  URL_logo = 'https://cdn.linkapi.com.br/api-movies-images/logo-verde.svg'
  constructor() { }

  ngOnInit(): void {
  }

}
