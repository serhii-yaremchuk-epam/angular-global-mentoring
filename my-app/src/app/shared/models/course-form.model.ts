import { Author } from './author.model';

export interface CourseFormModel {
  id?: string,
  name: string,
  description: string,
  length: number,
  date: Date,
  authors: Author[],
}
