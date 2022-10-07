const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const mimetypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  png: "image/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
};

const PORT = 8080;
const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // Writing to the page
  // res.statusCode(200);
  // res.write("Hello, Folks");
  // res.write("<p>Hello Paragraph</p>");
  // res.end();

  //setting the header content type
  res.setHeader("Content-Type", "text/html");
  if (req.url.indexOf(".css") != -1) {
    //req.url has the pathname, check if it conatins '.css'

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
      res.statusCode = 302;
      res.setHeader("Location", "/");
      break;
    default:
      pathname += "index.html";
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

server.listen(PORT, "localhost", console.log("I am live"));
