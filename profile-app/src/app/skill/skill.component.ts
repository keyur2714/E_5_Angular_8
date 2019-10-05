import { Component, OnInit, Input } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  skillSets : Skill[] = [];

  constructor() {
    console.log("Skill Component Object Created...!");
   }

  ngOnInit() {
  }

}
