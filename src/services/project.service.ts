import { projectRepository } from "../repositories/project.repository";
import fs from "fs/promises";
import path from "path";

export const projectService = {
  async createProject(file: Express.Multer.File, name?: string) {
    return projectRepository.create({
      name: name || file.originalname,
      fileUrl: `http://localhost:3001/files/${file.filename}`,
      fileName: file.filename,
    });
  },

  async listProjects() {
    return projectRepository.findAll();
  },

  async getProject(id: string) {
    return projectRepository.findById(id);
  },

  async deleteAllProjects() {
    const projects = await projectRepository.findAll();

    for (const project of projects) {
      if (project.fileName) {
        const filePath = path.resolve(process.cwd(), "uploads", project.fileName);
        
        try {
          await fs.unlink(filePath);
        } catch (error) {
          console.warn(`Aviso: Arquivo ${project.fileName} não encontrado no disco para exclusão.`);
        }
      }
    }

    return projectRepository.deleteAll();
  }
};