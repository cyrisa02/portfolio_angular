import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './pages/angular/angular.component';
import { HomeComponent } from './pages/home/home.component';
import { WordpressComponent } from './pages/wordpress/wordpress.component';
import { SymfonyComponent } from './pages/symfony/symfony.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: "symfony", component: SymfonyComponent },
  { path: "", component: HomeComponent },
  { path: "angular", component: AngularComponent },
  { path: "wordpress", component: WordpressComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
