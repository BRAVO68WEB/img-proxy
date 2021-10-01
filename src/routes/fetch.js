const express = require("express");
const router = express.Router();
const { base64decode } = require("nodejs-base64");

var Url2 = require("url-parse");
var http = require("http");
var https = require("https");

router.get("/image", async (req, res) => {
  const baseURL = req.protocol + "://" + req.headers.host + "/";
  console.log(req.url);
  var parts = new URL(req.url, baseURL);
  var encodedImageUrl = parts.searchParams.get("key");
  var imageUrl = base64decode(encodedImageUrl);
  parts = new Url2(imageUrl);
  console.log(parts);
  var filename = parts.pathname.split("/").pop();
  var options = {
    port: parts.protocol === "https:" ? 443 : 80,
    host: parts.hostname,
    method: "GET",
    path: parts.pathname,
    accept: "*/*",
  };

  var request =
    options.port === 443 ? https.request(options) : http.request(options);

  request.addListener("response", function (proxyResponse) {
    var offset = 0;
    var contentLength = parseInt(proxyResponse.headers["content-length"], 10);
    var body = new Buffer.alloc(contentLength);

    proxyResponse.setEncoding("binary");
    proxyResponse.addListener("data", function (chunk) {
      body.write(chunk, offset, "binary");
      offset += chunk.length;
    });

    proxyResponse.addListener("end", function () {
      res.contentType(filename);
      res.write(body);
      res.end();
    });
  });

  request.end();
});

module.exports = router;
