import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class Employee{
    public id : number;
    public name : string;
}
const empList : Employee[] = [
    {
        "id" : 1,
        "name" : "keyur"
    },
    {
        "id" : 2,
        "name" : "denish"
    },  
    {
        "id" : 3,
        "name" : "vinit"
    },
    {
        "id" : 4,
        "name" : "ravi"
    },
    {
        "id" : 5,
        "name" : "hiren"
    }
];
export class DummyService {
   getEmpList() : Observable<Employee[]> {
        return of(empList);       
   }     
   getFilteredEmpList() : Observable<Employee[]> {
     return of(empList).pipe(
         map(data=>{
             for(let emp of data){
                 emp.name = emp.name.toUpperCase();
             }
             return data;
         })
     );       
   }     
}