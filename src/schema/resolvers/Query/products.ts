import type { QueryResolvers } from './../../../graphql/types.generated.js';

import { prisma } from '../../../utils/db.js';

export const products: NonNullable<QueryResolvers['products']> = async (
  _parent,
  _arg,
) => {
  const product = await prisma.product.findUnique({
    where: {
      id: _arg.id,
    },
  });
  return product;
};
