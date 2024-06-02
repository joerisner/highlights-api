import { test, expect } from '@playwright/test';

test.describe('/highlights', () => {
  test('GET /highlights with no query params responds with 400 status', async ({ request }) => {
    const result = await request.get('/highlights');

    expect(result.status()).toBe(400);
    expect(result.headers()).toMatchObject({ 'content-type': 'application/json; charset=utf-8' });
    expect(await result.json()).toEqual({ message: 'Must request highlights by author, source, or tag!' });
  });

  test('GET /highlights by authorId', async ({ request }) => {
    const result = await request.get('/highlights?author=1');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    });

    expect(await result.json()).toEqual([
      {
        author: expect.any(String),
        body: expect.any(String),
        source: expect.any(String),
        tags: expect.any(Array)
      }
    ]);
  });
});
