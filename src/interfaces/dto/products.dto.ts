export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    thumbnail?: string[]
    short_description: string;
    rating: number;
    tags: string[],
    category: string;
  }