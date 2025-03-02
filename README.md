# Highlights API

This is an API serving highlighted quotes from books I've read. Too often, important excerpts from books are highlighted and then hidden a book on my bookshelf, only to be forgotten or never read again. This API serves as a means for me to quickly refresh my memory of those highlights.

## Data

The data is maintained within the project's [src/data](src/data) directory. The models are simple enough and the overhead of running a database is unnecessary for this project.

## Getting started

Ensure you have the proper version of Node installed (reference the [.nvmrc](.nvmrc) file).

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
make start
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

## Example request

Assuming your port is set to `5000`, here's an example of sending a request to the `/random` endpoint using **curl**.

```sh
curl -X GET "http://localhost:5000/random"
```
