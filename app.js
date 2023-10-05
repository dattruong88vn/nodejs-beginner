const server = require("./server");
const handler = require("./handler");
const router = require("./router");

const handle = {};
handle["/home"] = handler.home;
handle["/"] = handler.home;
handle["/review"] = handler.review;

server.createServer(router.route, handle);
