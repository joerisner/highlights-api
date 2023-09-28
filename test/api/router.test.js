import { test, expect } from '@playwright/test';

test.describe('router', () => {
  const expectedHeaders = { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' };

  test('/authors', async ({ request }) => {
    const result = await request.get('/authors');
    const responseBody = await result.json();

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);
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
      author: { id: expect.any(Number), firstName: expect.any(String), lastName: expect.any(String) },
      quotation: {
        id: expect.any(Number),
        body: expect.any(String),
        metadata: expect.any(String),
        authorId: expect.any(Number),
        sourceId: expect.any(Number),
        tagIds: expect.any(Array)
      },
      source: { id: expect.any(Number), title: expect.any(String), type: expect.any(String) }
    });
  });

  test('/sources', async ({ request }) => {
    const result = await request.get('/sources');
    const responseBody = await result.json();

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);
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
    const responseBody = await result.json();

    expect(result.status()).toBe(200);
    expect(result.headers()).toMatchObject(expectedHeaders);
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
