import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Product } from './model/Product';
import { schemas } from './schema';

const adapter = new SQLiteAdapter({
  schema: schemas,
});

const database = new Database({
  adapter,
  modelClasses: [Product],
});

export default database;
