import { Request, Response } from "express";
import { ProjectService } from "../services/projectService";
import { IProject } from "../models/Project";

class ProjectController {
  private projectService = new ProjectService();

  // Create a new project
  public async createProject(req: Request, res: Response): Promise<Response> {
    try {
      const { url } = req.body;
      const project: IProject = await this.projectService.createProject(
        req.user?.id || '',
        url,
      );
      return res.status(201).json({
        success: true,
        project,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get all projects for the authenticated user
  public async getAllProjects(req: Request, res: Response): Promise<Response> {
    try {
      const projects: IProject[] = await this.projectService.getAllProjects(
        req.user?.id || '',
      );
      return res.status(200).json({
        success: true,
        projects,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get specific project details
  public async getProjectById(req: Request, res: Response): Promise<Response> {
    try {
      const projectId = req.params.id;
      const project: IProject | null =
        await this.projectService.getProjectById(projectId);
      return res.status(200).json({
        success: true,
        project,
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Delete a project
  public async deleteProject(req: Request, res: Response): Promise<Response> {
    try {
      const projectId = req.params.id;
      await this.projectService.deleteProject(projectId);
      return res.status(200).json({
        success: true,
        message: "Project deleted successfully",
      });
    } catch (error: any) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default ProjectController;
