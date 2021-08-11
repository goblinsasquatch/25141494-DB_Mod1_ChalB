import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forces, SeniorOfficers, SpecificForce } from './police.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  fetchForceList() {
    return this.http.get<Forces[]>('https://data.police.uk/api/forces');
  }

  fetchSnrOffrData(force: string) {
    return this.http.get<SeniorOfficers[]>(
      `https://data.police.uk/api/forces/${force}/people`
    );
  }

  fetchSpecificForce(force: string) {
    return this.http.get<SpecificForce>(
      `https://data.police.uk/api/forces/${force}`
    );
  }
}
