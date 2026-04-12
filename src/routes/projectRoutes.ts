import { Router } from 'express';
import { ProjectController } from '../controllers/projectController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();
const projectController = new ProjectController();

// Route to get all projects for the authenticated user
router.get('/', authMiddleware, projectController.getAllProjects);

// Route to create a new project for analysis
router.post('/', authMiddleware, projectController.createProject);

// Route to get specific project details
router.get('/:id', authMiddleware, projectController.getProjectById);

// Route to delete a project
router.delete('/:id', authMiddleware, projectController.deleteProject);

export default router;