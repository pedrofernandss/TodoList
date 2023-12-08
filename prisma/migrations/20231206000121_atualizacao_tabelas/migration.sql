-- DropForeignKey
ALTER TABLE "tarefas" DROP CONSTRAINT "tarefas_tagId_fkey";

-- AlterTable
ALTER TABLE "tarefas" ALTER COLUMN "tagId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;
