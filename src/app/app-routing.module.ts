import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [{
  path: '',
  component: ProjectsComponent
},
{
  path: 'transactions',
  component: TransactionsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
