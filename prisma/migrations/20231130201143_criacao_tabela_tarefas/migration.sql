-- CreateTable
CREATE TABLE "tarefas" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "realizado" BOOLEAN NOT NULL,

    CONSTRAINT "tarefas_pkey" PRIMARY KEY ("id")
);
