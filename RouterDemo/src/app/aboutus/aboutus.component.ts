import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  companyName : string = '';
  location : string = '';

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(
    //   (queryParam)=>{
    //     this.companyName = queryParam.companyName;
    //     this.location = queryParam.location;
    //   }
    // )

    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        this.companyName = queryParamMap.get('companyName');
        this.location = queryParamMap.get('location');
      }
    )
  }

}
