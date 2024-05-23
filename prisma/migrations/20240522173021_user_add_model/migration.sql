/*
  Warnings:

  - You are about to drop the column `additionalInfo` on the `Configuration` table. All the data in the column will be lost.
  - Added the required column `apiUrl` to the `Configuration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vectorDbUrl` to the `Configuration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Configuration" DROP COLUMN "additionalInfo",
ADD COLUMN     "aiModels" TEXT[],
ADD COLUMN     "apiUrl" TEXT NOT NULL,
ADD COLUMN     "vectorDbUrl" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AiModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "configurationId" TEXT NOT NULL,

    CONSTRAINT "AiModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AiModel" ADD CONSTRAINT "AiModel_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "Configuration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
