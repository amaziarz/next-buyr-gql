import { PrismaClient } from '../generated/prisma/index.js';

export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});
