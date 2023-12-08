const path = require('path');
const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");
const cors = require('cors');


require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());

const route = require('./routes');

const database = require("./config/db");

// connect to database
database.connect();

// Favicon
app.use(favicon(__dirname + '/public/img/logobksang.ico'));

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json);
// app.use(express.urlencoded({ extended: true }));

// Flash
app.use(cookieParser("JHGJKLKLGFLJK"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());


app.use(express.static(path.join(__dirname, 'public')));

// app.use(
//     express.urlencoded({
//         extended: true,
//     }),
// );
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "pug");

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.use('/upload', upload.single('file'), (req, res) => {
//     // Render trang hiển thị thông tin về tệp tin đã tải lên
//     res.render('uploaded', { file: req.file });
//   });
  

// routes init
route(app);
// app.get("*", (req, res) => {
//     res.render("client/pages/errors/404", {
//       pageTitle: "404 Not Found",
//     });
// });

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});