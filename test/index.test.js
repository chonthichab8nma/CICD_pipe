const request = require('supertest');
const app = require('../src/index');

describe('API Tests', () => {
    it('should return hello message', async () => {
        const res = await request(app).get('/api/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ message: 'Hello from API!' });
    });
});