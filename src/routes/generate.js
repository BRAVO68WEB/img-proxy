const express = require("express");
const router = express.Router();
const { base64encode } = require("nodejs-base64");

var Url2 = require("url-parse");
var http = require("http");
var https = require("https");

router.get("/proxyURL", async (req, res) => {
  const baseURL = req.protocol + "://" + req.headers.host + "/";
  var parts = new URL(req.url, baseURL);
  var encodedImageUrl = parts.searchParams.get("url");
  var imageUrl = base64encode(encodedImageUrl);
  
  var proxyURL = baseURL + "fetch/image?key=" + imageUrl;
  res.json({proxyURL:proxyURL});  
});

module.exports = router;
