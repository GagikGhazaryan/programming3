class People extends LivingCreature {
    constructor(x, y) {
        super(x,y)
        this.energy = 8;
        this.multiply = 0
        
    }

    






    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var newGrass = new People(newX, newY);
            peopleArr.push(newGrass);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }

    eat() {
        var emptyCells = this.chooseCell(4)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        var emptyCells1 = this.chooseCell(3)
        var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)]
        var emptyCells6 = this.chooseCell(6)
        var newCell6 = emptyCells6[Math.floor(Math.random() * emptyCells6.length)]


        if (newCell) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorEaterArr) {
                if (newX == predatorEaterArr[i].x && newY == predatorEaterArr[i].y) {
                    predatorEaterArr.splice(i, 1)
                    break
                }
            }
        } else if (newCell1) {
            this.energy++
            var newX = newCell1[0]
            var newY = newCell1[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break
                }
            }
        } else if (newCell6) {
            this.die()
        }
        else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in peopleArr) {
            if (this.x == peopleArr[i].x && this.y == peopleArr[i].y) {
                peopleArr.splice(i, 1);
                break;
            }
        }
    }

}