export class Person {
    private firstName : string = 'Keyur';
    lastName : string = 'Thakur';
    age : number = 32;
    dob : string = '27/12/1986';
    gender : string = 'Male';
    contactNo : string = '7387029671';
    email : string = 'keyurjava27@gmail.com';

    public getFirstName() : string{
        return this.firstName;
    }

    public setFirstName(firstName : string) : void{
        this.firstName = firstName;
    }
}