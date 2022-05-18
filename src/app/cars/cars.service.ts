import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Car } from "./car";

@Injectable({providedIn: "root"})
export class CarService {
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}
    

    getCars(){
        return this.http.get<Car[]>(this.apiServerUrl + '/cars');
    }

    addCar(newCar: Car){
        return this.http.post<Car>(this.apiServerUrl + '/cars', newCar);
    }
}