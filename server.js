const http = require("http");
const fs = require("fs");
const users = require("./thirdPartyModule");
const path = require("path");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.write('<h1 style="color:red;">hiiiii</h1>');
  //   //   console.log("hello");
  //   res.end();
  //   fs.readFile("index.html", "utf-8", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.write(data);
  //       res.end();
  //     }
  //   });
  const url = req.url;
  let path = "./views/";
  if (url == "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: users,
      })
    );
  } else {
    switch (url) {
      case "/":
        path = path + "home.html";
        break;
      case "/about":
        res.statusCode = 301;
        res.setHeader("Location", "/aboutus");
        break;
      case "/aboutus":
        path = path + "about.html";
        break;
      default:
        res.statusCode = 404;
        path = path + "404.html";
        break;
    }
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(4000, (err) =>
  err ? console.log(err) : console.log("server is listening in port 4000")
);
