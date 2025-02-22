import { Migration } from '@mikro-orm/migrations';

export class Migration20250222113929 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "user" add column if not exists "role" text null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "user" drop column if exists "role";`);
  }

}
