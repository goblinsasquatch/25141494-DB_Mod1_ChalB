import { Component, Input, OnInit } from '@angular/core';
import { SpecificForce } from '../police.model';

@Component({
  selector: 'app-specific-force',
  templateUrl: './specific-force.component.html',
  styleUrls: ['./specific-force.component.css'],
})
export class SpecificForceComponent implements OnInit {
  @Input() selectedForceId: string = '';
  @Input() specificForce: SpecificForce | undefined;

  constructor() {}

  ngOnInit(): void {}
}
