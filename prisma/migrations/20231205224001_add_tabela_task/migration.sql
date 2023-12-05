/*
  Warnings:

  - The primary key for the `tarefas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tag` on the `tarefas` table. All the data in the column will be lost.
  - The `id` column on the `tarefas` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `atualizadoEm` to the `tarefas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagId` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tarefas" DROP CONSTRAINT "tarefas_pkey",
DROP COLUMN "tag",
ADD COLUMN     "atualizadoEm" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tagId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "realizado" SET DEFAULT false,
ADD CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "nomeTag" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
