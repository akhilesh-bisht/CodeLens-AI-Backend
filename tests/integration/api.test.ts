import request from 'supertest';
import app from '../../src/app'; // Import the Express app

describe('API Integration Tests', () => {
  // Test the authentication endpoints
  describe('Authentication Endpoints', () => {
    it('should login a user', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.user).toHaveProperty('id');
      expect(response.body.token).toBeDefined();
    });

    it('should return 401 for invalid login', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'wrong@example.com',
          password: 'wrongpassword',
        });
      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('Invalid credentials');
    });

    it('should signup a new user', async () => {
      const response = await request(app)
        .post('/api/auth/signup')
        .send({
          email: 'newuser@example.com',
          password: 'password123',
          name: 'New User',
        });
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.user).toHaveProperty('id');
      expect(response.body.token).toBeDefined();
    });

    it('should return 400 for existing user signup', async () => {
      const response = await request(app)
        .post('/api/auth/signup')
        .send({
          email: 'test@example.com',
          password: 'password123',
          name: 'Test User',
        });
      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe('User already exists');
    });
  });

  // Test the project management endpoints
  describe('Project Management Endpoints', () => {
    let token;

    beforeAll(async () => {
      // Login to get a token for authenticated requests
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });
      token = response.body.token;
    });

    it('should create a new project', async () => {
      const response = await request(app)
        .post('/api/projects')
        .set('Authorization', `Bearer ${token}`)
        .send({
          url: 'https://github.com/user/repo',
        });
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.project).toHaveProperty('id');
    });

    it('should get all projects', async () => {
      const response = await request(app)
        .get('/api/projects')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.projects)).toBe(true);
    });
  });

  // Additional tests for other endpoints can be added here
});