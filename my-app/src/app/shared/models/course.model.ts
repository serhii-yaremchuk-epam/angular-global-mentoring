export class Course implements ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: Date | number;
  description: string;
}

export interface ICourse {
  id: string;
  title: string;
  creationDate: Date;
  duration: Date | number;
  description: string;
}
