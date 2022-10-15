import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CatalogModule } from './catalog/catalog.module';
import { SettingModule } from './settings/settings.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    CatalogModule,
    SettingModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
