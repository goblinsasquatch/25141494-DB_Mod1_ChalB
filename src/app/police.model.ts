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
