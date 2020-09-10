import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ListBookRoutingModule } from './book-routing.module';
import { BookComponent } from './book/book.component';

const COMPONENTS = [BookComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, ListBookRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class ListBookModule {}
