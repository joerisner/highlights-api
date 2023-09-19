# Highlights API

This is an API serving highlighted quotes from books I've read.

## Built with

- :vertical_traffic_light: Routing: [Express](https://expressjs.com/)
- :test_tube: Testing: [Playwright](https://playwright.dev/)

## Data

The data is maintained within the project ([src/data](https://github.com/joerisner/highlights-api/tree/master/src/data)). The models are simple enough and, currently, I don't want the overhead of a database. That may change in the future, though.

## Getting started

1. Rename `.env.example` to `.env` and replace the example values with your own values
2. Ensure you're running the proper version of Node (reference the [.nvmrc](https://github.com/joerisner/highlights-api/blob/master/.nvmrc) file)
3. Install dependencies (`npm i`)
4. Start the server (`npm start`) and use your REST client of choice for making requests (curl, Postman, Thunder Client, etc.)

With a couple of tweaks, you could use this project to serve your own favorite highlights or quotes. To do so, replace the data I have in `src/data/*` with your own, using the schema defined in [src/data/\_schema.json](https://github.com/joerisner/highlights-api/blob/master/src/data/_schema.json).

## Example request

Assuming your port is set to `5000`, here's an example of sending a request to the `/random` endpoint using **curl**:

```shell
curl -X GET "http://localhost:5000/random"
```
