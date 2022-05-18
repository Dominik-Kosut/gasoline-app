import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Detail } from './detail';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private detailService: DetailService) { }

  details: Detail[];

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(){
    this.detailService.getDetails().subscribe({
      next: (response: Detail[]) => this.details = response,
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }

}
