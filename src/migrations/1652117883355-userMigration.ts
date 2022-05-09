import { MigrationInterface, QueryRunner } from "typeorm";

export class userMigration1652117883355 implements MigrationInterface {
    name = 'userMigration1652117883355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
