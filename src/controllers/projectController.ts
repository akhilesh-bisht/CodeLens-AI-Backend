import { Request, Response } from 'express';
import {ProjectService} from '../services/projectService';
import  Project  from '../models/Project';

class ProjectController {
    private projectService: ProjectService;

    constructor() {
        this.projectService = new ProjectService();
    }

    // Create a new project
    public async createProject(req: Request, res: Response): Promise<Response> {
        try {
            const { url } = req.body;
            const project: Project = await this.projectService.createProject(url);
            return res.status(201).json({
                success: true,
                project,
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    }

    // Get all projects for the authenticated user
    public async getAllProjects(req: Request, res: Response): Promise<Response> {
        try {
            const projects: Project[] = await this.projectService.getAllProjects(req.user.id);
            return res.status(200).json({
                success: true,
                projects,
            });
        } catch (error) {
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
            const project: Project = await this.projectService.getProjectById(projectId);
            return res.status(200).json({
                success: true,
                project,
            });
        } catch (error) {
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
                message: 'Project deleted successfully',
            });
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
    }
}

export default ProjectController;