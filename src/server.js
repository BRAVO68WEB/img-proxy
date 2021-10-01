const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");

const PORT = process.env.PORT || 8021;
const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    type: "multipart/form-data",
    limit: "50mb",
  })
);

app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
