import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { RestServiceService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  message: any;
  dialog: any;
  data: any[] = [];
  constructor(private restService: RestServiceService, private router: Router){
    this.dialog = document.getElementById('customDialog');
    console.log(this.dialog, 'awu');
    this.message = document.getElementById('dialogMessage');
    
    
  }
  ngOnInit(){

      this.restService.getStudents().subscribe(
        (data) => {
          console.log(data);
          this.data = data;
        }
      )
  }

  deleteStudent(sid : any){    
    console.log("Attempting to delete " + sid);
    this.restService.deleteStudent(sid).subscribe({
      next: (data) => {
        console.log("Data ", data);
        this.ngOnInit();
      },
      error: (error) => {
        console.log("Error", error);
        this.restService.setServerError(error);
        this.router.navigate(['error']);
      }
    });    
  }
  showDialog(sid: string): void{
    this.message.innerHTML = `Are you sure you want to delete Student with SID ${sid}?`;
    this.dialog.addEventListener('close', (e:any) => {
      console.log('Dialog closing...');
      this.dialog.close(false);
    });
    this.dialog.querySelector('#dialogConfirmBtn').addEventListener('click', (e: any) => {
      e.preventDefault();
      this.deleteStudent(sid);
      this.dialog.close(true);
    });
    this.dialog.showModal();
  }  

  viewModules(sid: string){
    this.router.navigate([`module/student/${sid}`]);
  }
}
