const request = require('supertest');
const app = require('../app');

let directorId;

test('POST /should bring one director ', async () => {
    const director = {
        firstName: "Ang",
        lastName: "avatar",
        nationality: "Bolivia",
        image: "http:prueba",
        birthday: "06-5-1908"
    }
    const res = await request(app).post('/directors').send(director);
    directorId = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
});

test('GET /should bring all directors ', async () => {
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('UPDATE /should bring update one director ', async () => {
    const directorUpdate = {
        firstName: "loma",
   
    }
    const res = await request(app)
    .put(`/directors/${directorId}`)
    .send(directorUpdate);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(directorUpdate.firstName);
});

test('DELETE /should delete one director', async () => {
    const res = await request(app).delete(`/directors/${directorId}`);
    expect(res.status).toBe(204);
});