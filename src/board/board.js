import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Board {

    constructor() {

        this.counter = 1;
        this.row = 0;
        this.col = 0;
        this.board = [];
        this.pointlocation = 0
    }

    checkrow(point,player){
        let counter=0;
        console.log(point);
        let row_number=point.x;//gitting the point row number
        console.log(row_number);
        let board_row=this.board[row_number];
        console.log(board_row)
        for(let i=0;board_row.length;i++){
            if(board_row[i]==player.color){
                counter++
                console.log("ther was amach :")
            }
            else{
                break;
            }
        }
        console.log("number of mach cells :",counter)
            if(counter==4){
                return true;
            }
            else{
                return false;
            }
    }

    checkcolumn(point,player){
        let counter=0;
        console.log(point);
        let column_number=point.y;//gitting the point column number
        console.log(column_number);
        for (let i = this.row- 1; i >= 0; i--){
            if(this.board[i][column_number]==player.color){
                counter++
                console.log("ther was amach :")
            }
            else{
                break;
            }
        }
        console.log("number of mach cells :",counter)
            if(counter==4){
                return true;
            }
            else{
                return false;
            }
    }

    checkdiagnalrighttoleft(point,player){
        let row_number= point.x;
        let column_number=point.y
        let counter=0;
        while(row_number<this.row && column_number<this.column){
            if(this.board[row_number][column_number]==player.color){
                row_number++;
                column_number--;
                counter++
            }
            else{
                break;
            }
        }
         
        console.log("number of mach cells :",counter)
        if(counter==4){
            return true;
        }
        else{
            return false;
        }

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
        console.log(this.board)
        return board;

    }


    checkifboaredfill() {
        return this.counter == (this.col * this.row);
    }

    getrandomcolumn(){
        return Math.floor(Math.random()*3)
    }

    moveplayer(e, player) {
        let board_coulumn
        let column
        if(player.constructor.name!="Computer"){
        column = e.currentTarget
        board_coulumn= column.getAttribute("column_number");
        }
        else{
            board_coulumn=this.getrandomcolumn()
        }
        for (let i = this.row- 1; i >= 0; i--) {
            if (this.board[i][board_coulumn] != player.color && this.board[i][board_coulumn] == 0) {
                this.board[i][board_coulumn] = player.color;
                console.log(this.board)
                this.pointlocation = { x: i, y:parseInt(column.getAttribute("column_number"))}
                return true
            }



        }
        return false

}

}
export default Board;