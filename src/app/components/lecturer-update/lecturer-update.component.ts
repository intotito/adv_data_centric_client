import { Component } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from '../home-page/home-page.component';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-lecturer-update',
  templateUrl: './lecturer-update.component.html',
  styleUrls: ['./lecturer-update.component.css'],
})
export class LecturerUpdateComponent {
  //lecturer: any;
  name: any;
  lid: any;
  taxBand: any;
  salaryScale: any;
  /* lid: any;
   name: any;
   taxBand: any;
   salaryScale: any;
 */
  public hideErrorMessage: boolean = true;
  public errorMessage = "kkkkkkkkkkkkkkkkk";

  constructor(private restService: RestServiceService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
/*    this.route.queryParams.subscribe(
      lecturer => {
        this.lid = lecturer['lid'];
        this.name = lecturer['name'];
        this.taxBand = lecturer['taxBand'];
        this.salaryScale = lecturer['salaryScale'];
      });
*/

      let lid: any = this.route.snapshot.paramMap.get('lid');
      console.log("LID ------------------ " + lid, this.route);
    this.restService.getLecturer(lid).subscribe({
      next: lecturer => {
        this.lid = lecturer['lid'];
        this.name = lecturer['name'];
        this.taxBand = lecturer['taxBand'];
        this.salaryScale = lecturer['salaryScale'];
      },
      error: error => {
        this.restService.setServerError(error);
        this.router.navigate(['error']);
      }
    });

  }


  showError(): void {

  }

  onSave() {
    let lecturer: any = { 'name': this.name, 'taxBand': this.taxBand, 'salaryScale': this.salaryScale };
    console.log("Lecturer: ", lecturer);
    this.restService.saveLecturer(this.lid, lecturer).subscribe({
      complete: () => {
        this.router.navigate(['lecturer']);
      },
      error: (error) => {
        this.restService.setServerError(error);
        this.router.navigate(['error']);
      }
    }
    )
    /*    this.ls.updateLecturer({ "lid": this.lid, "name": this.name, "taxBand": this.taxBand, "salaryScale": this.salaryScale }).subscribe(
    
          (data) => {
    
            this.router.navigate(['lecturers'])
    
          },
    
          (error) => {
    
            console.log(error.error.message)
    
            this.errorMessage = error.error.message;
    
            this.hideErrorMessage = false;
    
    
    
          }
     )
     */
  }
}
