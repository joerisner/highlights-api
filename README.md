# Highlights API

This is an API serving highlighted quotes from books I've read. Too often, important excerpts from books are highlighted and then hidden a book on my bookshelf, only to be forgotten or never read again. This API serves as a means for me to quickly refresh my memory of those highlights.

## Data

The data is maintained within the project ([src/data](src/data)). The models are simple enough and, currently, I don't want the overhead of a database. That may change in the future, though.

## Getting started

Ensure you're running the proper version of Node (reference the [.nvmrc](.nvmrc) file).

Create a `.env` file using the [.env.example](.env.example) file as a reference.

```sh
touch .env
```

Run the following command to setup the project locally.

```sh
make setup
```

Run the following command to start the application on the port defined in your `.env` file.

```sh
make
```

## Docker

If you would rather run the application in a Docker container, run the following command.

```sh
make dstart
```

To stop (and remove) the running container, run the following command.

```sh
make dstop
```

## Running tests

To run tests on the project, run the following command.

```sh
make test
```

With a couple of tweaks, you could use this project to serve your own favorite highlights or quotes. To do so, replace the data I have in `src/data/*` with your own, using the schema defined in [src/data/\_schema.json](src/data/_schema.json).

## Example request

Assuming your port is set to `5000`, here's an example of sending a request to the `/random` endpoint using **curl**.

```sh
curl -X GET "http://localhost:5000/random"
```
