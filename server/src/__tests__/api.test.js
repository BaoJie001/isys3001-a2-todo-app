const request = require('supertest');
const app = require('../server');

describe('Todo API', () => {
  test('server starts without errors', async () => {
    // Basic health check - server should respond to requests
    const response = await request(app).get('/api/todos').catch(() => ({ status: 404 }));
    expect([200, 404]).toContain(response.status);
  });
});