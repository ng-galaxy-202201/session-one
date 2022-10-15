import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  @Input() opened = false;

  @HostBinding('class')
  get className() {
    return this.opened ? '' : 'active'
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.opened = !this.opened;
  }

}
