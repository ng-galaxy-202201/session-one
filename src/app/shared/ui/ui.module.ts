import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './drawer/drawer-container/drawer-container.component';
import { DrawerComponent } from './drawer/drawer/drawer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    DrawerContainerComponent,
    DrawerComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule // habilita el uso de *ngIf, *ngFor, ngSwitch dentro de los componentes declarados
  ],
  exports: [
    DrawerContainerComponent,
    DrawerComponent,
    ButtonComponent
  ]
})
export class UiModule { }
