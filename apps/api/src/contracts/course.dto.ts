export interface CourseDto {
  id: string;
  title: string;
  description: string;
  language: 'de';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}
