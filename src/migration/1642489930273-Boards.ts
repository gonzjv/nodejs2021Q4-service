import { MigrationInterface, QueryRunner } from 'typeorm';

export class Boards1642489930273 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE TABLE boards(
            id VARCHAR(50) UNIQUE,
            title VARCHAR(30) NOT NULL
        );
        `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('boards');
  }
}
