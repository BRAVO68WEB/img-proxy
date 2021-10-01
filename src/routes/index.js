const express = require("express");
const router = express.Router();
const API = require("../../package.json");

router.get("/", (req, res) => {
  res.json([
    {
      name: "Img Proxy Server",
      version: API.version,
      description: API.description,
    },
  ]);
});

router.use("/fetch", require("./fetch"));
router.use("/generate", require("./generate"));

module.exports = router;
