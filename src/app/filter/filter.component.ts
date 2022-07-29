import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Launch } from '../launch';
import { Launch_obj } from '../launch_obj';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  yearSelect: any; // unable to assign number without initialization
  launchSelect: any; // unable to assign string without initialization
  landSelect: any;
  yearCheck :boolean = false;
  launchCheck : boolean = false;
  landCheck : boolean = false;
  
  launch_obj:Launch_obj = {};
  years=[
    {'year':2006},
    {'year':2007},
    {'year':2008},
    {'year':2009},
    {'year':2010},
    {'year':2011},
    {'year':2012},
    {'year':2013},
    {'year':2014},
    {'year':2015},
    {'year':2016},
    {'year':2017},
    {'year':2018},
    {'year':2019},
    {'year':2020},
    {'year':2021},
    {'year':2022}
  ]
  constructor(private router: Router,private route: ActivatedRoute) { }
  selectYear(year:number | undefined, index:number | undefined) {
    this.ngOnInit();
    console.log('SelectYear',year,index);
    this.yearCheck = !this.yearCheck;
    if (this.yearSelect !== index) {
      this.yearCheck = true;
    }

    this.yearSelect = index;
    this.launch_obj['launch_year'] = year;
    if(this.yearCheck!=false)
    this.router.navigate(['./home'],{relativeTo: this.route,queryParams: {'launch_year':year},queryParamsHandling: 'merge' });
    else
    this.router.navigate(['./home'],{relativeTo: this.route,queryParams: {'launch_year':null},queryParamsHandling: 'merge' });
  }
  
  successLaunch(bool:boolean)
  {
    this.ngOnInit();
    console.log('successLaunch',bool);
    this.launchCheck = !this.launchCheck;
    if (this.launchSelect !== bool.toString()) {
      this.launchCheck = true;
    }
    this.launchSelect = bool.toString();
    this.launch_obj['launch_success'] = bool;
    if(this.launchCheck!=false)
    this.router.navigate(['./home'],{relativeTo: this.route,queryParams: {'launch_success':bool},queryParamsHandling: 'merge' });
    else
    this.router.navigate(['./home'],{relativeTo: this.route,queryParams: {'launch_success':null},queryParamsHandling: 'merge' });
  }
  successLand(bool : boolean) {
    this.ngOnInit();
    console.log('successLand',bool);
    this.landCheck = !this.landCheck;
    // If different button is clicked, landCheck is true
    if (this.landSelect !== bool.toString()) {
      this.landCheck = true;
    }
    this.landSelect = bool.toString();
    this.launch_obj['land_success'] = bool;
    if(this.landCheck!=false)
    this.router.navigate(['./home'],{relativeTo: this.route,queryParams: {'land_success':bool},queryParamsHandling: 'merge' });
    else
    this.router.navigate(['./home'],{relativeTo: this.route,queryParams: {'land_success':null},queryParamsHandling: 'merge' });
  }

  ngOnInit(): void {
    console.log("Check params");
    this.route.queryParams.subscribe(params=>{
      if(params['launch_year']!==undefined)
      {
      this.yearCheck=true;
      this.yearSelect=parseInt(params['launch_year'])-2006;
      }
      else
      this.yearCheck=false;
      if(params['launch_success']!==undefined)
      {
        this.launchCheck=true;
        this.launchSelect=params['launch_success'];

      }
      else
      this.launchCheck=false;
      if(params['land_success']!==undefined)
      {
        this.landCheck=true;
        this.landSelect=params['land_success'];
      }
      else
      this.landCheck=false;
    });
  }

}
