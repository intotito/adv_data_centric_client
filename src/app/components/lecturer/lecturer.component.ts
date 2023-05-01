import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { RestServiceService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css'],
})
export class LecturerComponent {
  data: any[] = [];
  constructor(private restService: RestServiceService, private router: Router) {
  }
  ngOnInit() {
    this.restService.getLecturers().subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;
      }, 
      error: error => {
        this.restService.setServerError(error);
        this.router.navigate(['error']);
      }
    })
  }

  viewLecturer(lecturer: any) {
    this.router.navigate(['lecturer-update', lecturer.lid])
  }
}
