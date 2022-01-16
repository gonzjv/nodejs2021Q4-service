import { MigrationInterface, QueryRunner } from 'typeorm';

export class Tasks1642343487043 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE TABLE tasks(
            id VARCHAR(50) UNIQUE,
            title VARCHAR(30),
            task_order INTEGER,
            description VARCHAR(100),
            userId VARCHAR(50),
            boardId VARCHAR(50),
            columnId VARCHAR(50)
        );
        `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks');
  }
}
