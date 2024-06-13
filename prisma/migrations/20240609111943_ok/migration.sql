/*
  Warnings:

  - Made the column `subsiteId` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_subsiteId_fkey`;

-- AlterTable
ALTER TABLE `post` MODIFY `subsiteId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatar` VARCHAR(191) NULL,
    ADD COLUMN `type` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    ADD COLUMN `uri` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_subsiteId_fkey` FOREIGN KEY (`subsiteId`) REFERENCES `Subsite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
