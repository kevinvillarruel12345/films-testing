const request = require('supertest');
const app = require('../app');

let actorId;

test('POST /should bring one actor', async () => {
    const actor = {
        firstName: "Dan",
        lastName: "Val",
        nationality: "Ecu",
        image: "http:prueba",
        birthday: "05-5-1900"
    }
    const res = await request(app).post('/actors').send(actor);
    actorId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
});

test('GET /should bring all actors', async () => {
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('PUT / should bring update one actor', async () => {
    const actorUpdate = {
        firstName: "kevin"
    }
    const res = await request(app)
    .put(`/actors/${actorId}`)
    .send(actorUpdate);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(actorUpdate.firstName);
});


test('DELETE / should bring update one actor', async () => {
    const res = await request(app).delete(`/actors/${actorId}`);
    expect(res.status).toBe(204);
});