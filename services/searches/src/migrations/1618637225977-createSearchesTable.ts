import {MigrationInterface, QueryRunner} from "typeorm";

export class createSearchesTable1618637225977 implements MigrationInterface {
    name = 'createSearchesTable1618637225977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `search` (`id` int NOT NULL AUTO_INCREMENT, `time` datetime NOT NULL, `description` varchar(255) NOT NULL, `location` varchar(255) NOT NULL, `ipAddress` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `search`");
    }

}
