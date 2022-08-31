import { appSchema } from '@nozbe/watermelondb';
import { productSchema } from './productSchema';

const schemas = appSchema({
  tables: [productSchema],
  version: 1,
});

export { schemas };
