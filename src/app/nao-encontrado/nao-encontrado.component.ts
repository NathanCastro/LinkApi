import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.scss']
})
export class NaoEncontradoComponent implements OnInit {

  URL_Encontrado="https://cdn.linkapi.com.br/api-movies-images/warning-nomovie.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
