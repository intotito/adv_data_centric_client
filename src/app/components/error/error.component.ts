import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService } from 'src/app/services/rest-service.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  error: any;
  constructor(private restService: RestServiceService, private router: Router){
    this.error = this.restService.getServerError();
  }

  ngOnInit(){
    if(!this.error){
      this.router.navigate(['']);
    }
  }
}
