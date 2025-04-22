/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js';
import { products as Query_products } from './../schema/resolvers/Query/products.js';
import { Product } from './../schema/resolvers/Product.js';
export const resolvers: Resolvers = {
  Query: { products: Query_products },

  Product: Product,
};
