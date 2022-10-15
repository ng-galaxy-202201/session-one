import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  providers: [CurrencyPipe]
})
export class PipesComponent implements OnInit {
  title = 'galaxy Training';
  paragraph = `
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  `;
  users = [
    'Luis',
    'Jose',
    'Juan',
    'Pedro'
  ];

  price = 1000.9875;

  today = new Date();

  percent = .5;

  data = {
    name: 'Luis',
    lastName: 'Vilcarromero',
  }

  constructor(private currency: CurrencyPipe) {
    console.log(this.currency.transform(this.price))
  }

  ngOnInit(): void {}
}
