import type { GraphQLContext } from '../../../utils/context.js';
import type { QueryResolvers } from './../../../graphql/types.generated.js';

export const products: NonNullable<
  QueryResolvers<GraphQLContext>['products']
> = async (_parent, _arg, _ctx) => {
  const product = await _ctx.prisma.product.findUnique({
    where: {
      id: _arg.id,
    },
  });
  return product;
};
