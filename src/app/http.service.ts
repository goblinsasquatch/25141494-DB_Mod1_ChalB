import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface SeniorOfficers {
  bio: string;
  contact_details?: {
    twitter?: string;
  };
  name: string;
  rank: string;
}

export interface SpecificForce {
  description: string;
  url: string;
  engagement_methods: [
    {
      url: string;
      description: string;
      title: string;
    }
  ];
  telephone: string;
  id: string;
  name: string;
}

export interface Forces {
  id: string;
  name: string;
}

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
