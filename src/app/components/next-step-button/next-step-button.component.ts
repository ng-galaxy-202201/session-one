import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-next-step-button',
  templateUrl: './next-step-button.component.html',
  styleUrls: ['./next-step-button.component.css', '../../app.component.css']
})
export class NextStepButtonComponent implements OnInit {
  @Input() title?: string;
  @Input() type?: string;
  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
