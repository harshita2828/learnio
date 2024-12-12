const express = require("express");
const router = express.Router();
const NotesController = require("../Controllers/NotesController");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: "./files",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });


router.post("/upload", upload.single("file"), NotesController.uploadNote);
router.get("/getFiles", NotesController.getNote);
router.get("/getFiles/:id", NotesController.getNoteByID);

module.exports = router;



// 6const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const destinationPath = "./files";
//         cb(null, destinationPath);
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     },
// });

// const upload = multer({
//     storage: storage
// });