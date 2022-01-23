import { MigrationInterface, QueryRunner } from 'typeorm';

export class BoardColumns1642608493869 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
      CREATE TABLE boardColumns(
            id VARCHAR(50) UNIQUE,
            title VARCHAR(30),
            "order" INTEGER,
            boardId VARCHAR(50),
            CONSTRAINT FK_columns_board FOREIGN KEY (boardId) REFERENCES boards (id)
            );
            `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('boardColumns');
  }
}
