import { projectRepository } from "../repositories/project.repository";

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
};