/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "GymUser" (
    "userId" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "inscriptionDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastDate" TIMESTAMP(3),
    "phone" TEXT NOT NULL,

    CONSTRAINT "GymUser_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "GymUser_userId_key" ON "GymUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "GymUser_email_key" ON "GymUser"("email");
