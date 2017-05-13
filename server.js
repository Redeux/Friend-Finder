const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    PORT = process.argv[2];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./app/routing')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
