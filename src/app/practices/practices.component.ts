import { Component } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrl: './practices.component.scss'
})
export class PracticesComponent {

  ngOnInit () {

    //slice 
  //The slice() method returns selected elements in an array, as a new array
  //The slice() method does not change the original array.
  //Original array not chang i.e Return selected elements.

    let arr:string[] = ["A","B","C","D","E"]

    let newarr:string[] = arr.slice(1,3)
    console.log(newarr)
    console.log("original array not changed", arr);

    //splice
    //the splice() method adds/removes array elements.
    //Original array changes i.e returns deleted elements in array.

    let arr2 :string[] = ["0","1","2","3","4","5"]

    //let newarr2 = arr2.splice(1,2)
     
    let addsplice = arr2.splice(2,5,'ah','bh')
    
   
    console.log(addsplice)
    console.log(arr2) 

  }

  

 

}
