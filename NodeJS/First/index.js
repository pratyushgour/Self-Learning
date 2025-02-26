const http = require("http");
const express = require("express");
// const fs = require("fs");
// const url = require("url");


const app = express();

app.get("/", (req, res) => {
    return res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
    return res.send("Hey," + req.query.name);
})

app.listen(8000, () => console.log("Server Started!"));

// const handler = (req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.method} New Req Recieved\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end(`Hi, ${myUrl.query.name}`);
//         break;
//       case "/about":
//         res.end("I am Pratyush Gour");
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for " + search);
//       case "/signup":
//         if (req.method === "GET") res.end("This is a signup form");
//         else if (req.method === "POST") {
//           res.end("Success");
//         }
//         break;
//       default:
//         res.end("404 Not Found");
//         break;
//     }
//   });
// }

// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started"));
