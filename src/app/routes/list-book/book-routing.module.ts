import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ImportProspectComponent } from './import-prospect/import-prospect.component';
import { ListBookSettingsComponent } from './list-book-settings/list-book-settings.component';

const routes: Routes = [
  {
    path: 'prospects',
    component: BookComponent,
    data: { title: 'Prospect' },
  },
  {
    path: 'importProspect',
    component: ImportProspectComponent,
    data: { title: 'ImportProspect' },
  },
  {
    path: 'settings',
    component: ListBookSettingsComponent,
    data: { title: 'Settings' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListBookRoutingModule {}
