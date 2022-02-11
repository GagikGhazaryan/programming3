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

let matrix = generator(20, 60, 10, 10, 10, 20,5);



let side = 40;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let predatorEaterArr = []
let peopleArr = []
let wallArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac');
    frameRate(5)
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
}
function draw() {
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
    
}