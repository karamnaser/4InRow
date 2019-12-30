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
    static checkdiagnallefttoright(point, player) {
        let counter = 0;
        let column_number = point.y;
        let row_number = point.x;
        const leftDiagnal = {
           startCol : 0,
           startRow : 0
        }
        if(column_number != 0 && row_number != 0){
            if(column_number > row_number){
                leftDiagnal.startCol = column_number - row_number;
                leftDiagnal.startRow = row_number - row_number;
            }else if(column_number < row_number){
                leftDiagnal.startCol = column_number - column_number;
                leftDiagnal.startRow = row_number - column_number;
            }
        }
        for (let i = leftDiagnal.startRow; i < this.board.length; i++) {
            console.log(this.board);
            console.log(counter);
            if (this.board[i][leftDiagnal.startCol] == player.color) {
                counter++
                leftDiagnal.startCol++
                console.log(counter)
                if (counter == 4) {
                    return true;
                }
            } else {
                counter=0;
                leftDiagnal.startCol++
            }
        }
        return false
        };

    static checkdiagnalrighttoleft(point, player) {
            let counter = 0;
            let column_number = point.y;
            let row_number = point.x;
      
            const rightDiagnal = {
                startCol : column_number,
                startRow :  row_number
            }

            if(column_number != this.row-1 && row_number != 0){
             rightDiagnal.startCol = column_number + row_number;
             rightDiagnal.startRow = row_number - row_number;
              
            }
            for (let i = rightDiagnal.startRow; i < this.board.length; i++) {
                console.log(this.board);
                console.log(counter);
                if (this.board[i][rightDiagnal.startCol] == player.color) {
                    counter++
                    rightDiagnal.startCol--
                    console.log(counter)
                    if (counter == 4) {
                        return true;
                    }
                } else {
                    counter=0;
                    rightDiagnal.startCol--
                }
            }
            return false
            };
  
    
        


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