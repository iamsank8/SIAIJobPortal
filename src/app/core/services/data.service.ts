import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class DataService {
  public shortListedCandidates: any = [];
  public currentInterview: any = [];
  constructor(private http: HttpClient) {}
  getPostedJobs(): Observable<any> {
    return this.http.get("http://localhost:4200/assets/data.json");
  }
}