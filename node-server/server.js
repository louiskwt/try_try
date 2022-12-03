const http = require("http");
const port = process.env.PORT || 3000;
const fs = require("fs");

function serveStaticFile(res, path, contenType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contenType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // normalize url by removing querystring, optional trailing slash, and making it lower case
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");
      break;
    case "/img/logo.png":
      serveStaticFile(res, "/public/img/logo.png", "img/png");
      break;
    default:
      serveStaticFile(res, "/public/404.html", "text/html");
      break;
  }
});

server.listen(port, () =>
  console.log(`Server started on port ${port} 'press Ctrl-C to terminate...`)
);
