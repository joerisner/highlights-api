import { test, expect } from '@playwright/test';

test.describe('errorHandler', () => {
  test('respond with 404 for invalid method', async ({ request }) => {
    const result = await request.put('/random');

    expect(result.status()).toBe(404);
    expect(result.headers()).toMatchObject({ 'content-type': 'application/json; charset=utf-8' });
    expect(await result.json()).toEqual({ message: 'Not Found' });
  });

  test('respond with 404 for invalid endpoint', async ({ request }) => {
    const result = await request.get('/');

    expect(result.status()).toBe(404);
    expect(result.headers()).toMatchObject({ 'content-type': 'application/json; charset=utf-8' });
    expect(await result.json()).toEqual({ message: 'Not Found' });
  });
});
