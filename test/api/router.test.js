import { test, expect } from '@playwright/test';

test.describe('router', () => {
  const expectedHeaders = { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' };

  test('/authors', async ({ request }) => {
    const result = await request.get('/authors');
    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);

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

  test('/random', async ({ request }) => {
    const result = await request.get('/random');

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);
    expect(await result.json()).toEqual({
      author: expect.any(String),
      body: expect.any(String),
      source: expect.any(String),
      tags: expect.any(Array)
    });
  });

  test('/sources', async ({ request }) => {
    const result = await request.get('/sources');
    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);

    const responseBody = await result.json();
    expect(responseBody).toEqual({ sources: expect.any(Array) });

    const { sources } = responseBody;
    for (const source of sources) {
      expect(source).toEqual({
        id: expect.any(Number),
        title: expect.any(String),
        type: expect.any(String)
      });
    }
  });

  test('/tags', async ({ request }) => {
    const result = await request.get('/tags');
    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);

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
