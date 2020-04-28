import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembriiComponent } from 'src/app/membrii/membrii.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
