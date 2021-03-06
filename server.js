var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

//10

function generator(matLen, gr, grEat, pr, prEat, peop, wall) {
 let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < prEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < peop; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < wall; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    return matrix;
}

matrix = generator(25, 20, 10, 10, 10, 20,5);

io.sockets.emit('send matrix',matrix)


grassArr = []
grassEaterArr = []
predatorArr = []
predatorEaterArr = []
peopleArr = []
wallArr = []

weath = "winter";
Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predator = require("./Predator")
PredatorEater = require("./PredatorEater")
People = require("./People")
Wall = require("./Wall")

function createObject() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            }
            
            else if (matrix[y][x] == 4) {
                let gr = new PredatorEater(x, y)
                predatorEaterArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                let gr = new People(x, y)
                peopleArr.push(gr)
            }
            else if (matrix[y][x] == 6) {
                let gr = new Wall(x, y)
                wallArr.push(gr)
            }
        }

    }

    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (let j in grassEaterArr) {
        grassEaterArr[j].mul()
        grassEaterArr[j].eat()
    }
    for (let h in predatorArr) {
        predatorArr[h].mul()
        predatorArr[h].eat()
    }
    for (let s in predatorEaterArr) {
        predatorEaterArr[s].mul()
        predatorEaterArr[s].eat()
    }
    for (let p in peopleArr) {
        peopleArr[p].mul()
        peopleArr[p].eat()
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    io.sockets.emit("send matrix", matrix);
}
setInterval(game, 400)

function kill() {
    grassArr = [];
    grassEaterArr = []
    predatorArr = []
    predatorEaterArr = []
    peopleArr = []
    wallArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addGrass() {
    for (var i = 0; i < 7; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}


function addGrassEater() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addPredator() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            predatorArr.push(new Predator(x, y, 3))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addPredatorEater() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            predatorEaterArr.push(new PredatorEater(x, y, 4))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addPeople() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            peopleArr.push(new People(x, y, 5))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addWall() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
            wallArr.push(new Wall(x, y, 6))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);




    




io.on('connection', function (socket) {
    createObject()
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add predator", addPredator);
    socket.on("add predatorEater", addPredatorEater);
    socket.on("add people", addPeople);    
    socket.on("add wall", addWall)
})

statistics = {

}

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.predator = predatorArr.length;
    statistics.predatorEater = predatorEaterArr.length;
    statistics.people = peopleArr.length;
    statistics.wall = wallArr.length
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)