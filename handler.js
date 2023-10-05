const querystring = require("querystring");

const home = (response) => {
  // console.log("Execute home handler");
  const html = `<form action="/review" method="POST"><textarea name="text"></textarea><input type="submit" value="submit"/></form>`;
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(html);
  response.end();
};
const review = (response, data) => {
  // console.log("Execute review handler");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("You are reviewing " + querystring.parse(data).text);
  response.end();
};

exports.home = home;
exports.review = review;
