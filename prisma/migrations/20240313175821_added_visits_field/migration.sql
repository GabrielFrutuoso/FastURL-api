-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_url" ("created_at", "id", "short_url", "url") SELECT "created_at", "id", "short_url", "url" FROM "url";
DROP TABLE "url";
ALTER TABLE "new_url" RENAME TO "url";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
