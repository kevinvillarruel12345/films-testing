const request = require('supertest');
const app = require('../app');

let genreId;

test('POST / should bring one genre', async () => {
    const genre = {
        name: "terror"
    }
    const res = await request(app).post('/genres').send(genre);
    genreId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
});

test('GET /should bring all genres', async () => {
  const res = await request(app).get('/genres');
   expect(res.status).toBe(200);
   expect(res.body).toHaveLength(1);
}); 

test('PUT /should bring update one genre', async () => {
    const genreUpdate = {
        name: "drama"
    }
    const res = await request(app)
    .put(`/genres/${genreId}`)
    .send(genreUpdate);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(genreUpdate.name);
});

test('DELTE /should bring delete one genre', async () => {
    const res = await request(app).delete(`/genres/${genreId}`);
    expect(res.status).toBe(204);
});

