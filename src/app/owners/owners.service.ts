import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Owner } from "./owner";

@Injectable({providedIn: "root"})
export class OwnersService{
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}
    

    getOwners(){
        return this.http.get<Owner[]>(this.apiServerUrl + '/owners');
    }

    getOwner(id: number){
        return this.http.get<Owner>(this.apiServerUrl + `/owners/${id}`);
    }

    deleteOwner(id: number){
        return this.http.delete<boolean>(this.apiServerUrl + `/owners/${id}`);
    }

    addOwner(newOwner: Owner){
        return this.http.post<Owner>(this.apiServerUrl + '/owners', newOwner);
    }
}