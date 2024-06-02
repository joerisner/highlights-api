import { test, expect } from '@playwright/test';

test.describe('/tags', () => {
  test('GET /tags', async ({ request }) => {
    const result = await request.get('/tags');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject({
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    });

    const responseBody = await result.json();
    expect(responseBody).toEqual({ tags: expect.any(Array) });

    const { tags } = responseBody;
    for (const tag of tags) {
      expect(tag).toEqual({
        id: expect.any(Number),
        name: expect.any(String)
      });
    }
  });
});
