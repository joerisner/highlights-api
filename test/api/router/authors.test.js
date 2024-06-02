import { test, expect } from '@playwright/test';

test.describe('/authors', () => {
  test('GET /authors', async ({ request }) => {
    const result = await request.get('/authors');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    });

    const responseBody = await result.json();
    expect(responseBody).toEqual({ authors: expect.any(Array) });

    const { authors } = responseBody;
    for (const author of authors) {
      expect(author).toEqual({
        id: expect.any(Number),
        firstName: expect.any(String),
        lastName: expect.any(String)
      });
    }
  });
});
