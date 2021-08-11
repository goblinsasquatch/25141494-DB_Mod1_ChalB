import { Component, Input, OnInit } from '@angular/core';
import { SeniorOfficers } from '../police.model';

@Component({
  selector: 'app-senior-officers',
  templateUrl: './senior-officers.component.html',
  styleUrls: ['./senior-officers.component.css'],
})
export class SeniorOfficersComponent implements OnInit {
  @Input() selectedForceId: string = '';
  @Input() snrOffrList: SeniorOfficers[] = [];

  constructor() {}

  ngOnInit(): void {}
}
