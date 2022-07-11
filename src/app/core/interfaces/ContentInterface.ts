import { Category } from './CategoryInterface';

export interface Content {
  id: number;
  image: string;
  title: string;
  description: string;
  content: string;
  date_limit: Date;
  state: string;
  created_at: Date;
  updated_at: Date;
  category: Category;
  tags: string[];
}
