import { Course } from './course.model';

export class Student {
    constructor(public studentId ?: number,public name?:string,public email ?: string,public mobileNo ?: string,public gender?:string,public course ?: Course){}
    display():void{
        console.log(this.name+" "+this.email+" "+this.mobileNo+" "+this.course.courseName+" "+this.course.fees);
    }
}