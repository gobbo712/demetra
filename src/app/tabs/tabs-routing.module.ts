import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ventas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./ventas/ventas.module').then(m => m.VentasPageModule)
          }
        ]
      },
      {
        path: 'inventario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./inventario/inventario.module').then(m => m.InventarioPageModule)
          }
        ]
      },
      {
        path: 'cierre',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./cierre/cierre.module').then(m => m.CierrePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/ventas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ventas',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
