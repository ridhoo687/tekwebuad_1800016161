import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
{
  path:'home',
  component: HomeComponent
},
{
  path:'student',
  component: StudentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
