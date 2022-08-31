import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Product extends Model {
  static table = 'products';

  @field('product_name')
  product_name!: string;
}

export { Product };
