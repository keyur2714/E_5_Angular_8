import { Component, OnInit } from '@angular/core';
import { Person } from './personal-details/person.model';
import { Skill } from './skill/skill.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Profile Demo';

  person : Person = new Person();

  person1 : Person = new Person();

  skills : Skill[] = [];

  ngOnInit(){
    this.person.setFirstName('denish');
    this.person.lastName = 'patel';
    this.person.age = 32;
    this.person.dob = '24/05/1985';
    this.person.gender = 'Male';
    this.person.contactNo  = '7387029111';
    this.person.email = 'denishjava27@gmail.com';


    this.person1.setFirstName('vinit');
    this.person1.lastName = 'shah';
    this.person1.age = 44;
    this.person1.dob = '23/08/1986';
    this.person1.gender = 'Male';
    this.person1.contactNo  = '738702977';
    this.person1.email = 'vinitjava27@gmail.com';


    let skill1 = new Skill();
    skill1.skillType = 'Database';
    skill1.skillSets = ['MySql','Sql Server','Oracle'];

    let skill2 = new Skill();
    skill2.skillType = 'Language';
    skill2.skillSets = ['Java','Angular','C++','C'];

    let skill3 = new Skill();
    skill3.skillType = 'Operating System';
    skill3.skillSets = ['Windows','Linux'];

    let skill4 = new Skill();
    skill4.skillType = 'Tools';
    skill4.skillSets = ['Maven','Gradle','Ant','npm'];

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
  }

}
