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
import { ProjectsComponent } from './projects/projects.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    MembriiComponent,
    MemberTileComponent,
    DepartmentsComponent,
<<<<<<< HEAD
    DepartmentDropdownComponent,
    DepartmentPopupComponent,
    ProjectsComponent
=======
    DropdownComponent,
    DepartmentPopupComponent
>>>>>>> 49c38befae1ab032440068574f527256eb3c8cb5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
<<<<<<< HEAD
    MatSelectModule,
    IvyCarouselModule
=======
    MatSelectModule
>>>>>>> 49c38befae1ab032440068574f527256eb3c8cb5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
