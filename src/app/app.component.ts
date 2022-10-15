import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'session-one';
  nextSteps = [
    { title: 'New Component', type: 'component' },
    { title: 'Angular Material', type: 'material' },
    { title: 'Add PWA Support', type: 'pwa' },
    { title: 'Add Dependency', type: 'dependency' },
    { title: 'Run and Watch Tests', type: 'test' },
    { title: 'Build for Production', type: 'build' },
  ];
}
