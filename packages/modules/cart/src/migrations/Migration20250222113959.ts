import { Migration } from '@mikro-orm/migrations';

export class Migration20250222113959 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "cart" add column if not exists "location_id" text null;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_cart_location_id" ON "cart" (location_id) WHERE deleted_at IS NULL AND location_id IS NOT NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop index if exists "IDX_cart_location_id";`);
    this.addSql(`alter table if exists "cart" drop column if exists "location_id";`);
  }

}
