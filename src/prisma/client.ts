import { PrismaClient } from "@prisma/client";
import 'dotenv/config';

// Evita múltiplas instâncias no desenvolvimento (Hot Reload)
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});