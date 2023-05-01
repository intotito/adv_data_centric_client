import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturerComponent } from './components/lecturer/lecturer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LecturerUpdateComponent } from './components/lecturer-update/lecturer-update.component';
import { StudentComponent } from './components/student/student.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'student', component: StudentComponent},
  { path: 'lecturer', component: LecturerComponent },
  { path: 'lecturer-update/:lid', component: LecturerUpdateComponent },
  {path: 'error', component: ErrorComponent},
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
