import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage });

export default upload;
