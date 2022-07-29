import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noresults',
  templateUrl: './noresults.component.html',
  styleUrls: ['./noresults.component.css']
})
export class NoresultsComponent implements OnInit {
  @Output() removeFilter = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  removeFilters()
  {
    this.removeFilter.emit(false);
    this.router.navigate(['/home']);
  }
}
