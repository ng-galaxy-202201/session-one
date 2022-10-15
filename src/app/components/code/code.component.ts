import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit, OnDestroy {
  @Input() code?: string;

  constructor() {
    console.log('CodeComponent[constructor]', this.code)
  }

  ngOnInit(): void {
    console.log('CodeComponent[ngOnInit]', this.code)

  }

  ngOnDestroy(): void {
    console.log('CodeComponent[ngOnDestroy]')
  }

}
