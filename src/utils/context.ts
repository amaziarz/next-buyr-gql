import type { PrismaClient } from '../generated/prisma/index.js';

import { prisma } from './db.js';

export type GraphQLContext = {
  prisma: PrismaClient;
};

export const createContext = (): Promise<GraphQLContext> => {
  return Promise.resolve({
    prisma,
  });
};
