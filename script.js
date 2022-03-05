var socket = io();

let side = 40;

let weath = "spring"
function setup() {
    createCanvas(25 * side, 24 * side)
    background('#acacac');
    frameRate(5)

}

socket.on("weather", function (data) {
    weath = data;
})



function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                (matrix[y][x] == 1)
                 if (weath == "winter") {
                    fill("white");
                }
                if (weath == "spring"){
                    fill("pink")
                }
                if (weath == "summer"){
                    fill("purple")
                }
                if (weath == "autumn"){
                    fill("#626200")
                }
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                (matrix[y][x] == 2)
                 if (weath == "winter") {
                    fill("#62929b");
                } 
                if (weath == "spring") {
                    fill("#44929b");
                } 
                if (weath == "summer") {
                    fill("#05004f");
                } 
                if (weath == "autumn") {
                    fill("#9ed49d");
                } 
            }
            else if (matrix[y][x] == 3) {
                fill("blue")
                
                 if (weath == "winter") {
                    fill("orange");
                } 
                if (weath == "spring") {
                    fill("yellow");
                } 
                if (weath == "summer") {
                    fill("black");
                } 
                if (weath == "autumn") {
                    fill("purple");
                } 
            }
            else if (matrix[y][x] == 4) {
                fill("red")
                if (weath == "winter") {
                    fill("green");
                } 
                if (weath == "spring") {
                    fill("#4d4a01");
                } 
                if (weath == "summer") {
                    fill("#4d4a96");
                } 
                if (weath == "autumn") {
                    fill("#4dde96");
                } 
            }
            else if (matrix[y][x] == 5) {
                fill("#ffc766")
                if (weath == "winter") {
                    fill("#b09090");
                } 
                if (weath == "spring") {
                    fill("#d9d8dc");
                } 
                if (weath == "summer") {
                    fill("#d93cdc");
                } 
                if (weath == "autumn") {
                    fill("#606060");
                } 
            }
            else if (matrix[y][x] == 6) {
                fill("black")
                if (weath == "winter") {
                    fill("#5f3cdc");
                } 
                if (weath == "spring") {
                    fill("#bc3cdc");
                } 
                if (weath == "summer") {
                    fill("#e63cdc");
                } 
                if (weath == "autumn") {
                    fill("#e63c7d");
                } 
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
    socket.emit("add grassEater")
}
function addPredator() {
    socket.emit("add predator")
}
function addPredatorEater() {
    socket.emit("add predatorEater")
}
function addPeople() {
    socket.emit("add people")
}
function addWall() {
    socket.emit("add wall")
}



