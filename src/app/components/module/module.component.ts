import { Component } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  data: any[] = [];
  message: any;

  constructor(private restService: RestServiceService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit() {
    let user: any = this.route.snapshot.paramMap.get('user');
    let id: any = this.route.snapshot.paramMap.get('id');
    this.restService.getModules(user, id).subscribe({
      next: data => {
        this.data = data;
        console.log('udu', this.data);
      },
      error: error => {
        this.restService.setServerError(error);
        this.router.navigate(['error']);
      }
    });
    if(user === 'lecturer'){
      this.message = 'Modules Taught by ' + id;
    } else if (user === 'student'){
      this.message = 'Modules Enrolled In';
    }
  }
}

