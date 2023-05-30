const request = require('supertest');
const app = require('../app');

let movieId;

test('POST /should bring create one movie ', async () => {
    const movie = {
        name: "Avatar",
        image: "http:/prueba",
        synopsis: "prueba",
        releaseYear: "2010"
    }
    const res = await request(app).post('/movies').send(movie);
    movieId = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
});

test('GET /should bring all movies', async () => {
    const res = await request(app).get('/movies');
    console.log(res.body)
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('PUT / should bring update one actor', async () => {
    const movieUpdate = {
       name: "tron"
    }
    const res = await request(app)
    .put(`/movies/${movieId}`)
    .send(movieUpdate);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(movieUpdate.name);
});

test('DELETE / should bring update one movies', async () => {
    const res = await request(app).delete(`/movies/${movieId}`);
    expect(res.status).toBe(204);
});