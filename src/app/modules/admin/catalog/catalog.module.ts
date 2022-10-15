import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  exports: [CatalogComponent]
})
export class CatalogModule {}
