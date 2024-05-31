import { Component } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.scss'
})
export class FirstcomponentComponent {

  ngOnInit(){    

  }

  backclk(){
    console.log('backbtn clicked')
  }  

}
