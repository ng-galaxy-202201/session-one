import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  /**
   * Formas de evitar inicializar atributo
   * Usar ! cuando el valor es obligatorio
   * Usar ? cuando es opcional
   */
  @Input() title?: string;

  constructor() {
    // if (this.title) this.title.length;
  }

  ngOnInit(): void {
  }

}
