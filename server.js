const http = require("http");
const url = require("url");

function createServer(route, handle) {
  function handleRequest(request, response) {
    // get pathname of route
    const pathname = url.parse(request.url).pathname;

    // get data submit
    let reviewData = "";
    request.addListener("data", function (chunk) {
      reviewData += chunk;
    });
    request.addListener("end", function () {
      route(handle, pathname, response, reviewData);
    });
  }
  http.createServer(handleRequest).listen(8080);
}

module.exports = { createServer };
