const multer = require("multer");
const path = require("path");

const destination = path.resolve("temp");

const storage = multer.diskStorage({
  destination: destination,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const newName = `${uniqueSuffix}_${file.originalname}`;
    cb(null, newName);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
