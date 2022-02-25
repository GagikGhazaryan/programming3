var socket = io();

let side = 25;


function setup() {
    createCanvas(15 * side, 15 * side)
    background('#acacac');
    frameRate(5)
    
}
function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue")
            }
            else if (matrix[y][x] == 4) {
                fill("red")
            }
            else if (matrix[y][x] == 5) {
                fill("#ffc766")
            }
            else if (matrix[y][x] == 6) {
                fill("black")
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);
        }
    }

    
    
}


    socket.on('send matrix', nkarel)
   


    function kill() {
        socket.emit("kill")
    }
    function addGrass() {
        socket.emit("add grass")
    }
    function addGrassEater() {
        socket.emit("addgrasseater")
    }
    function addPredator() {
        socket.emit("addpredator")
    }
    function addPredatorEater() {
        socket.emit("addpredatoreater")
    }
    function addPeople() {
        socket.emit("add people")
    }
    function addWall() {
        socket.emit("add wall")
    }



   