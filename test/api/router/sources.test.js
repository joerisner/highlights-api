import { test, expect } from '@playwright/test';

test.describe('/sources', () => {
  test('GET /sources', async ({ request }) => {
    const result = await request.get('/sources');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    });

    const responseBody = await result.json();
    expect(responseBody).toEqual({ sources: expect.any(Array) });

    const { sources } = responseBody;
    for (const source of sources) {
      expect(source).toEqual({
        id: expect.any(Number),
        completed: expect.any(Boolean),
        title: expect.any(String),
        type: expect.any(String)
      });
    }
  });
});
