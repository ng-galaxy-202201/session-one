import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  options = [
    { title: 'Catalogo', section: 'catalog' },
    { title: 'Configuración', section: 'setting' },
  ]

  optionSelected = ''

  constructor() { }

  ngOnInit(): void {
  }

}
