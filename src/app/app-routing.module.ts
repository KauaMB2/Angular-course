import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { EventsComponent } from './components/events/events.component';
import { TestStandaloneComponent } from './components/test-standalone/test-standalone.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [//Storage the routes
  {path: '', component: TestComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'animals', component: EventsComponent},
  {path: 'standalone', component: TestStandaloneComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
