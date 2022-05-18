import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Detail } from "./detail";

@Injectable({providedIn: "root"})
export class DetailService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}
    

    getDetails(){
        return this.http.get<Detail[]>(this.apiServerUrl + '/details');
    }

    // addDetails(newDetail: Detail){
    //     return this.http.post<Detail>(this.apiServerUrl + '/details', newDetail);
    // }
}