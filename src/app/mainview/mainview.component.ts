import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  
  @Input() components: any;
  constructor() { }

  ngOnInit(): void {
  }

  

}
