const request = require('supertest');
const app = require('../src/app');  

let server;

beforeAll((done) => {
  server = app.listen(3001, () => {
    console.log('Test server running...');
    done();
  });
});

afterAll((done) => {
  server.close(() => {
    console.log('Server closed');
    done();
  });
});

describe('API Tests', () => {
  test('should return hello message', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, world!');
  });
});
