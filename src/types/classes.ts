export interface Class {
  id: number;
  name: string;
}

export interface ClassesResponse {
  items: Class[];
}

export interface ClassDetailMentor {
  id: number;
  name: string;
  description: string;
}
export interface ClassDetailResponse {
  id: number;
  name: string;
  mentors: ClassDetailMentor[];
  description: string;
}
