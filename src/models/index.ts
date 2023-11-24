export type PostList = number[];

export interface NewsStory {
  title: string;
  score: number;
  by: string;
  time: number;
}

export interface Item {
  by: string;
  descendants?: number;
  id: number;
  kids?: number[];
  score: number;
  text?: string;
  time: number;
  title: string;
  type: string;
  url?: string;
  count?: number;
}
