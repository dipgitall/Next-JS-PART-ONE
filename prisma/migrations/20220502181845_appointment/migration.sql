-- CreateTable
CREATE TABLE "appointment_app" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pname" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "app_date" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "symptoms" TEXT NOT NULL,
    "app_time" TEXT NOT NULL
);
