export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    image: string;
    short_description: string;
    rating: number;
    tags: string[],
    category: string;
  }