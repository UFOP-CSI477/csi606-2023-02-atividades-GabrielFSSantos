/*
  Warnings:

  - You are about to drop the column `Complemento` on the `pessoas` table. All the data in the column will be lost.
  - Added the required column `complemento` to the `pessoas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pessoas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);
INSERT INTO "new_pessoas" ("cidade_id", "created_at", "id", "nome", "numero", "rg", "rua", "tipo_id", "updated_at") SELECT "cidade_id", "created_at", "id", "nome", "numero", "rg", "rua", "tipo_id", "updated_at" FROM "pessoas";
DROP TABLE "pessoas";
ALTER TABLE "new_pessoas" RENAME TO "pessoas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
