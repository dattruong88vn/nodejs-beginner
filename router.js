function route(handle, pathname, response, data) {
  // console.log("Routing a request for" + pathname);

  if (typeof handle[pathname] === "function") {
    handle[pathname](response, data);
  } else {
    // console.log("no handler for" + pathname);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("Not found 404");
    response.end();
  }
}

exports.route = route;
