import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Launch } from './launch';
import { Launch_obj } from './launch_obj';
import { SpacexService } from './spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-assignment';
  url='https://api.spaceXdata.com/v3/launches?limit=100';
  parameters: Launch_obj ={};
  currentRoute:string="";
  components: Array<Launch> = [];
  displayNoresults:boolean=false;
  constructor(private _spacex: SpacexService,private route: ActivatedRoute,private router:Router)
  {
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      if(params['launch_year']!==undefined)
      {
        console.log("Year",params['launch_year']);
        this.parameters.launch_year=parseInt(params['launch_year']);
      }
      else
      delete this.parameters.launch_year;
      if(params['launch_success']!==undefined)
      {
        console.log("Set Launch");
        const launch_success=params['launch_success'];
        this.parameters.launch_success=JSON.parse(launch_success);
      }
      else
      delete this.parameters.launch_success;
      if(params['land_success']!==undefined)
      {
        console.log("Set Land");
        const land_success=params['land_success']
        this.parameters.land_success=JSON.parse(land_success);
        console.log(this.parameters.land_success,typeof this.parameters.land_success);
      }
      else
      delete this.parameters.land_success;
      this.getData();
      });

  }
  removeFilter(bool:boolean)
  {
    this.displayNoresults=bool;
  }
  getData()
  {
    this.currentRoute=this.router.url;
    this._spacex.getSpaceX(this.url,this.parameters).subscribe((components:Array<Launch>) => {
      if(components) {

        this.components = components;
        console.log("Length of Components",components.length);

        if(this.components.length==0)
        this.displayNoresults=true;
      }
    })
  }
}