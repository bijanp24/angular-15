import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveComponent } from './responsive';
import { SeedComponent } from './seed';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'seed', component: SeedComponent },
  {
    path: 'responsive',
    loadComponent: () =>
      import('./responsive').then((m) => m.ResponsiveComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
