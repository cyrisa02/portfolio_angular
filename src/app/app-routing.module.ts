import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SymfonyComponent } from './projet/symfony/symfony.component';


const routes: Routes = [
  { path: "symfony", component: SymfonyComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
