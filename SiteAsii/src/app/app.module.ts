import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MemberTileComponent } from './membrii/member-tile/member-tile.component';
import { MembriiComponent } from './membrii/membrii.component';
import { DepartmentDropdownComponent } from './department-dropdown/department-dropdown.component';
import { DepartmentPopupComponent, DepartmentsComponent } from './departments-section';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    MembriiComponent,
    MemberTileComponent,
    DepartmentsComponent,
    DepartmentDropdownComponent,
    DepartmentPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
