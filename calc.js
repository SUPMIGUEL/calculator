// requirements
var express = require('express'),
     app = express();

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
  // send back the response: 'Hello World'
    res.send("Hello World");
});

/*app.get("/add/:num1/:num2", function (req, res) {
    var sum = Number(req.params.num1) + Number(req.params.num2);
    res.send(sum.toString());
});

app.get("/sub/:num1/:num2", function (req, res) {
    var sum = Number(req.params.num1) - Number(req.params.num2);
    res.send(sum.toString());
});

app.get("/mult/:num1/:num2", function (req, res) {
    var sum = Number(req.params.num1) * Number(req.params.num2);
    res.send(sum.toString());
});

app.get("/div/:num1/:num2", function (req, res) {
    var sum = Number(req.params.num1) / Number(req.params.num2);
    res.send(sum.toString());
});*/

app.get("/:op/:num1/:num2", function (req, res) {
    var op = req.params.op;
    var num1 = Number(req.params.num1);
    var num2 = Number(req.params.num2);
    var sum;

    if (op === "add") {
        sum = num1 + num2;
    }
    else if (op === "sub") {
        sum = num1 - num2;
    }
    else if (op === "mult") {
        sum = num1 * num2;
    }
    else if (op === "div") {
        sum = num1 / num2;
    }
    res.send(sum.toString());
});

// start the server
app.listen(3000, function () {
     console.log("Starting a server on localhost:3000");
});


/*When a user visits /add/9/3, it should display 12
When a user visits /sub/9/3, it should display 6
When a user visits /mult/9/3, it should display 27
When a user visits /div/9/3, it should display 3*/