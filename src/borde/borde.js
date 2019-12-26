import React from 'react'
import BorderCells from './cells'
import 'bootstrap/dist/css/bootstrap.min.css'

class Bored {

    constructor() {

        this.counter = 1;
        this.row = 0;
        this.col = 0;
        this.board = [];
        this.pointlocation = 0
    }


    creatbored() {
        this.row = prompt('pls enetr number of row (min 4 rows)')
        this.row = this.row < 4 ? 4 : this.row;
        this.column = prompt('pls enter number of column (min 4 column)')
        this.column = this.column < 4 ? 4 : this.column
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


    checkifboaredfill() {
        return this.counter == (this.col * this.row);
    }

    moveplayer(e, player) {
        let column = e.currentTarget
        let board_coulumn = this.board[column.getattrebute("column_number")];
        for (let i = board_coulumn.length - 1; i >= 0; i--) {
            if (board_coulumn[i] != player.icon && board_coulumn[i] == 0) {
                this.board[i] = player.icon;
                this.pointlocation = { x: i, y: column.column_number }
                console.log(this.pointlocation)
                return true
            }



        }
        return false

    }

}

export default Bored