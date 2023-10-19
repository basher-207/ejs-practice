const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const router = require("./router.js")

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(ejsLayouts);

app.use(router);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`);
})

module.exports = server;
