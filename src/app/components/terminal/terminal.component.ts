import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit, OnChanges {
  @Input() selectionValue?: string;
  @Input() title?: string;
  @Input() message?: string;

  constructor() { }

  ngOnInit(): void {
    console.log('TerminalComponent[ngOnInit]', this.selectionValue)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('TerminalComponent[ngOnChanges]', this.selectionValue)
    console.log('TerminalComponent[ngOnChanges]', changes)
    if (changes['selectionValue'].previousValue !== changes['selectionValue'].currentValue) {

    }
  }

}
