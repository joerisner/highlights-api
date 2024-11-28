import { test, expect } from '@playwright/test';

test.describe('/random', () => {
  test('GET /random', async ({ request }) => {
    const result = await request.get('/random');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    });

    expect(await result.json()).toEqual({
      author: expect.any(String),
      body: expect.any(String),
      metadata: expect.any(String),
      source: expect.any(String),
      tags: expect.any(Array)
    });
  });
});
