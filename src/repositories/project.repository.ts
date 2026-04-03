import { prisma } from "../prisma/client";

export const projectRepository = {
  create(data: any) {
    return prisma.project.create({ data });
  },

  findAll() {
    return prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  findById(id: string) {
    return prisma.project.findUnique({ where: { id } });
  },
};