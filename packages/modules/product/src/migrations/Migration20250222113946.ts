import { Migration } from '@mikro-orm/migrations';

export class Migration20250222113946 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "product" add column if not exists "location_ids" text[] null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "product" drop column if exists "location_ids";`);
  }

}
