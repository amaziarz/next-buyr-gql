import { faker } from '@faker-js/faker';

import { PrismaClient } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();

const PRODUCT_COUNT = 10;

const seedProducts = async () => {
  const products = Array.from({ length: PRODUCT_COUNT }, () => {
    const name = faker.commerce.productName();
    return {
      description: faker.commerce.productDescription(),
      name,
      price: faker.number.int({ max: 10000, min: 100 }),
      slug: faker.helpers.slugify(name).toLowerCase(),
    };
  });

  try {
    await prisma.product.createMany({
      data: products,
      skipDuplicates: true,
    });
    console.log('Successfully seeded products');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

seedProducts()
  .catch((error: unknown) => {
    console.error('Error in seed script:', error);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
