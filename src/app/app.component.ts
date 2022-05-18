import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
              private route: ActivatedRoute){}

  onLoadCars(){
    this.router.navigate(['/cars']);
  }

  onReload(){
    // this.router.navigate(['/cars'], {relativeTo: this.route});
  }
  
}
