import { Request, Response } from "express";
import { projectService } from "../services/project.service";

export const projectController = {
  async upload(req: Request, res: Response) {
    const project = await projectService.createProject(
      req.file!,
      req.body.name
    );

    res.json(project);
  },

  async list(req: Request, res: Response) {
    const projects = await projectService.listProjects();
    res.json(projects);
  },

  async get(req: Request, res: Response) {
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const project = await projectService.getProject(id);

  if (!project) {
    return res.status(404).json({ error: "Projeto não encontrado" });
  }

  res.json(project);
}
};