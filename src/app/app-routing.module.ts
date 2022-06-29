import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { LoginComponent } from './login/login.component';
import { MenutoolComponent } from './menutool/menutool.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenutoolComponent},
  {path:'employee',component:EmployeedataComponent},
  {path:'login',component:LoginComponent},
  {path:'side-nav',component:SideNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
