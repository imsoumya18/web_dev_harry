const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync(
  "/home/soumya/VS Code Projects/web_dev_harry/node/index.html"
);
const about = fs.readFileSync(
  "/home/soumya/VS Code Projects/web_dev_harry/node/about.html"
);
const services = fs.readFileSync(
  "/home/soumya/VS Code Projects/web_dev_harry/node/services.html"
);
const contact = fs.readFileSync(
  "/home/soumya/VS Code Projects/web_dev_harry/node/contact.html"
);

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.end(home);
  } else if (req.url == "/about") {
    res.end(about);
  } else if (req.url == "/services") {
    res.end(services);
  } else if (req.url == "/contact") {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
