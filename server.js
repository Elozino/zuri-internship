const http = require("http");
const fs = require("fs");

const PORT = 8080;
const server = http.createServer((req, res) => {
  // injecting css
  if (req.url.indexOf(".css") != -1) {
    //req.url has the pathname, check if it contains '.css'
    fs.readFile("./public/styles/style.css", function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }

  let pathname = "./views/";
  switch (req.url) {
    case "/":
      pathname += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      pathname += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      pathname += "contact.html";
      res.statusCode = 200;
      break;
    case "/home":
      // redirect to page with 301 (Moved Permanently) HTTP code in the response
      res.writeHead(302, {
        Location: "/",
      });
      break;
    default:
      pathname += "404.html";
      res.statusCode = 200;
      break;
  }

  //send an html file
  fs.readFile(pathname, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(PORT, "localhost", console.log("I am live on localhost:8080"));