const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();

const PORT = 4000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./upload");
    },
    filename: function (req, file, cb){
        return cb(null, `${Date.now()}-${file.filename}`);
    }
})

const upload = multer({storage});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use("/upload", express.static("upload"));

app.get("/", (req, res) => {
    res.render("homepage");
})

app.post("/upload", upload.fields([
    {name: "profileImage", maxCount: 1},
    {name: "anotherImage", maxCount: 1}
]), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    res.render("homepage");
})

app.listen(PORT, () => console.log("Server Started on PORT: ", PORT));