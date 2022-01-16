import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1642277976705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE TABLE users(
            id VARCHAR(50) UNIQUE,
            name VARCHAR(30) NOT NULL,
            login VARCHAR(30) NOT NULL,
            password VARCHAR(30) NOT NULL
        );
        `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
