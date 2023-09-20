import { test, expect } from '@playwright/test';

test.describe('router', () => {
  test('/random', async ({ request }) => {
    const result = await request.get('/random');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    });
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
});
