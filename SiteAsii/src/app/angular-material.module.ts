import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { MatButtonModule, MatCardModule } from '@angular/material';
const MaterialComponents = [
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ],
  declarations: []
})
export class AngularMaterialModule { }
