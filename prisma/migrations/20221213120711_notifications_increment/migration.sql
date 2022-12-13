/*
  Warnings:

  - Added the required column `recipiendId` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipiendId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_notification" ("category", "content", "createdAt", "id", "readAt") SELECT "category", "content", "createdAt", "id", "readAt" FROM "notification";
DROP TABLE "notification";
ALTER TABLE "new_notification" RENAME TO "notification";
CREATE INDEX "notification_recipiendId_idx" ON "notification"("recipiendId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
