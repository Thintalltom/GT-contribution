type Primitive = string | number | boolean;

export interface ProductSimplified {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Record<string, number>;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<Record<string, Primitive>>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Record<string, Primitive>;
  thumbnail: string;
  images: string[];
}
