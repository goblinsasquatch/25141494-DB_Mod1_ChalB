import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Forces, SeniorOfficers, SpecificForce } from './police.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  forcesList: Forces[] = [];
  selectedForceId: string = '';
  snrOffrList: SeniorOfficers[] = [];
  specificForce: SpecificForce | undefined;

  constructor(private dataService: HttpService) {}

  ngOnInit() {
    this.dataService.fetchForceList().subscribe((resData) => {
      this.forcesList = resData;
    });
  }

  submit(form: NgForm) {
    this.selectedForceId = form.value.forceSelector;
    console.log('Selected Force: ', this.selectedForceId);

    this.dataService
      .fetchSnrOffrData(this.selectedForceId)
      .subscribe((resData) => {
        console.log('Returned Senior Officer Data: ', resData);
        this.snrOffrList = resData;
      });

    this.dataService
      .fetchSpecificForce(this.selectedForceId)
      .subscribe((resData) => {
        this.specificForce = resData;
        console.log('Returned Force Data: ', this.specificForce);
      });
  }
}
