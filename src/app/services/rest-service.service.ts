import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
//  lecturer: any;
  serverError: any;
  constructor(private httpClient: HttpClient) { }

  getLecturers(): Observable<any> {
    let url: string = 'http://localhost:8080/lecturers';
    return this.httpClient.get(url);
  }

  getLecturer(lid: string): Observable<any>{
    let url: string = `http://localhost:8080/lecturer/${lid}`;
    return this.httpClient.get(url);
  }

  saveLecturer(lid: string, lecturer: any): Observable<any> {
//    let lect = {"name": lecturer.name, "taxBand": lecturer.taxBand, "salaryScale": lecturer.salaryScale };
    let url: string = `http://localhost:8080/lecturer/${lid}`;
    console.log("Trying to save ", lecturer, " with lid: " + lid);
    return this.httpClient.put(url, lecturer, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
  getStudents(): Observable<any>{
    let url: string = 'http://localhost:8080/students';
    return this.httpClient.get(url);
  }

  deleteStudent(sid: any): Observable<any>{
    let url: string = `http://localhost:8080/students/${sid}`;
    console.log("Sending delete request to " + url);
    return this.httpClient.delete(url);
  }

  setServerError(error: any){
    console.log('Server error set', error);
    this.serverError = error;
  }
  getServerError(){
    console.log('Getting server error', this.serverError);
    return this.serverError;
  }

  getModules(user: any, id: any): Observable<any>{
    console.log("user", user, "id", id);
    let url: string = `http://localhost:8080/module/${user}/${id}`;
    console.log('attempting', url);
    return this.httpClient.get(url);
  }
}
