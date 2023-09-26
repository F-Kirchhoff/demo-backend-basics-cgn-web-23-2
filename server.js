import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello World");
    return;
  }

  if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Tschüss World!");
    return;
  }

  if (request.url === "/answer") {
    response.statusCode = 200;
    response.end("42");
    return;
  }

  response.statusCode = 404;
  response.end("Not Found");
});
