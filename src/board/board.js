import 'bootstrap/dist/css/bootstrap.min.css'

class Board {

    constructor() {

        this.counter = 0;
        this.row = 0;
        this.col = 0;
        this.board = [];
        this.pointlocation = 0
    }
    get pointlocation() {
        return this.pointlocation;
    }
    get board() {
        return this.board;
    }

    static checkrow(point, player) {
        let counter = 0;
        let row_number = point.x; //gitting the point row number
        let column_number = point.y;
        let board_row = this.board[row_number];

        for (let i = 0; i < board_row.length; i++) {
            if (board_row[i] == player.color) {
                counter++
                if (counter == 4) {
                    return true;
                }

            } else {
                counter = 0
            }
        }


        console.log("number of mach cells :", counter)
        if (counter != 4) {
            return false;
        }

    }

    static checkcolumn(point, player) {
        let counter = 0;
        let column_number = point.y; //gitting the point column number
        let row_number = point.x
        let column = [];
        this.board.map((row, i) => {
            if (i >= row_number) {
                column.push(row[column_number]);
            }
        });

        for (let color of column) {
            if (color == player.color) {
                counter++
            } else {
                break;
            }
        }
        console.log("number of mach cells :", counter)
        if (counter == 4) {
            return true;
        } else {
            return false;
        }
    }

    static checkdiagnalrighttoleft(point, player) {
            let counter = 0;
            let column_number = point.y
            for (let i = 0; i < this.row; i++) {
                if (this.board[i][column_number--] == player.color) {
                    counter++
                    if (counter == 4) {
                        return true;
                    }
                } else {
                    return false;
                }
            }
            console.log(this.board)
            console.log("number of mach cells :", counter)

        }
        // static checkdiagnalrighttoleft(point, player) {
        //     let row_number = point.x;
        //     let column_number = point.y
        //     let counter = 0;
        //     let diagnalLeft = [];
        //     let diagnalRight = [];



    // const leftPoints = {
    //     startCol: 0,
    //     startRow: 0
    // };

    // const rightPoints = {
    //     startCol: 0,
    //     startRow: 0
    // };

    // if (row_number != 0 && column_number != 0) {
    //     if (row_number > column_number) {
    //         leftPoints.startCol = column_number - column_number;
    //         leftPoints.startRow = row_number - column_number;

    //     } else if (column_number > row_number) {
    //         leftPoints.startRow = row_number - row_number;
    //         leftPoints.startCol = column_number - row_number;
    //     }

    // } else {
    //     leftPoints.startCol = column_number;
    //     leftPoints.startRow = row_number;
    // }
    // this.board.map((row, i) => {
    //     if (i >= leftPoints.startRow) {
    //         diagnalLeft.push(row[leftPoints.startCol++]);
    //     }
    // })

    // if (row_number != this.row - 1 && column_number != this.column - 1) {
    //     this.board.map((row, i) => {
    //         if (i >= leftPoints.startRow) {
    //             diagnalLeft.push(row[leftPoints.startCol++]);
    //         }
    //     })

    //     console.log(leftPoints);
    //     console.log(diagnalLeft)


    //     console.log("number of mach cells :", counter)
    //     if (counter == 4) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }


    static creatbored() {
        this.row = prompt('pls enetr number of row (min 4 rows)')
        this.row = this.row < 4 ? 4 : this.row;
        this.column = prompt('pls enter number of column (min 4 column)')
        this.column = this.column < 4 ? 4 : this.column
        if (this.row > this.column) {
            this.column = this.row;
            this.row = this.column;
        }
        let board = []
        for (let i = 0; i < this.column; i++) {
            let div_arr = []
            for (let j = 0; j < this.row; j++) {
                div_arr.push(0)
            }
            board.push(div_arr)
        }
        this.board = board;
        return board;

    }


    static checkifboaredfill(counter, row, column) {
        return counter == (column * row);

    }

    static getrandomcolumn() {
        return Math.floor(Math.random() * 3)
    }

    static moveplayer(e, player) {
        let board_coulumn
        let column
        if (player.constructor.name != "Computer") {
            column = e.target
            board_coulumn = column.getAttribute("column_number");
        } else {
            board_coulumn = this.getrandomcolumn()
        }
        for (let i = this.row > this.column ? this.row - 1 : this.column - 1; i >= 0; i--) {
            if (this.board[i][board_coulumn] != player.color && this.board[i][board_coulumn] == 0) {
                this.board[i][board_coulumn] = player.color;
                this.pointlocation = { x: i, y: parseInt(column.getAttribute("column_number")) }
                console.log(this.pointlocation)
                return true
            }
        }
        return false

    }

}
export default Board;