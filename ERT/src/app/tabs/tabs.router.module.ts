import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { EmployeeDetailPage } from '../pages/employee-detail/employee-detail.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [{
      path: 'employee-detail',
      children: [
        {
          path: ':id',
          loadChildren: '../pages/employee-detail/employee-detail.module#EmployeeDetailPageModule'
        }
      ]
    },
    {
      path: 'tab1',
      children: [
        {
          path: '',
          loadChildren: '../tab1/tab1.module#Tab1PageModule'
        }
      ]
    },
    {
      path: 'tab2',
      children: [
        {
          path: '',
          loadChildren: '../tab2/tab2.module#Tab2PageModule'
        },
        // {
        //   path: 'employee-detail/:id',
        //   outlet: 'employee-detail',
        //   component: EmployeeDetailPage
        // }
      ]
    },
    {
      path: 'tab3',
      children: [
        {
          path: '',
          loadChildren: '../tab3/tab3.module#Tab3PageModule'
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/tab1',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  // {
  //   path: 'employee-detail/:id',
  //   outlet: 'employee-detail',
  //   component: EmployeeDetailPage
  // }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
