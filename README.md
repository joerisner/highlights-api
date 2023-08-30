# Highlights API

This is an API serving highlighted quotes from books I've read. The project is deliberately minimal:

- It implements native node modules in most cases (with exceptions for some devDependencies)
- The data is maintained within the project ([src/data](https://github.com/joerisner/highlights-api/tree/master/src/data)). The models are simple enough and, currently, I don't want the overhead of a database. That may change in the future, though :man_shrugging:.

## Getting started

With a couple of tweaks, you could use this project to serve your own favorite highlights or quotes.

1. Rename `.env.example` to `.env` and replace the example values with your own values.
2. Ensure you're running the proper version of Node (reference the [.nvmrc](https://github.com/joerisner/highlights-api/blob/master/.nvmrc) file)
3. Replace the data I have in `src/data/*` with your own, using the proper schema.
4. Start the server (`npm start`) and use your REST API client of choice for making requests (curl, Postman, Thunder Client, etc.)

## Example request

Assuming your port is set to `5000`, here's an example of sending a request to the `/random` endpoint using **curl**:

```shell
curl -X GET "http://localhost:5000/random"
```
