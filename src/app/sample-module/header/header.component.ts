import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private route:Router){}

  ngOnInit(){

  }

  homeclk(){
    this.route.navigate(['./sample/home'])
  }
  aboutClick(){
    this.route.navigate(['./sample/about'])
  }

  carrerClick(){
    this.route.navigate(['./sample/careers'])
  }

}
