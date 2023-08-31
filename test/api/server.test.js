import { test, expect } from '@playwright/test';

test.describe('/random', () => {
  test('respond with success', async ({ request }) => {
    const result = await request.get('/random');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({ 'content-type': 'application/json' });
    expect(await result.json()).toEqual({
      author: { id: expect.any(Number), firstName: expect.any(String), lastName: expect.any(String) },
      quotation: {
        id: expect.any(Number),
        body: expect.any(String),
        metadata: expect.any(String),
        authorId: expect.any(Number),
        sourceId: expect.any(Number)
      },
      source: { id: expect.any(Number), title: expect.any(String), type: expect.any(String) }
    });
  });

  test('respond with 400 for any method other than GET', async ({ request }) => {
    const result = await request.put('/random');

    expect(result.status()).toBe(400);
    expect(result.headers()).toMatchObject({ 'content-type': 'application/json' });
    expect(await result.json()).toEqual({ message: 'Bad Request' });
  });

  test('respond with 404 for invalid route', async ({ request }) => {
    const result = await request.get('/rando');

    expect(result.status()).toBe(404);
    expect(result.headers()).toMatchObject({ 'content-type': 'application/json' });
    expect(await result.json()).toEqual({ message: 'Not Found' });
  });
});
