import { TableSchema } from '@nozbe/watermelondb';
import { tableSchema } from '@nozbe/watermelondb/Schema';

const productSchema = tableSchema({
  columns: [
    {
      name: 'product_name',
      type: 'string',
    },
  ],
  name: 'products',
});

export { productSchema };
