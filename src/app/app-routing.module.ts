import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [//Storage the routes
  {path: '', component: TestComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'animals', component: EventsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
