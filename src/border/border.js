import React from 'react'
import BorderCells from './cells'
import 'bootstrap/dist/css/bootstrap.min.css'

class Bored {

    constructor() {

        this.counter = 1;
        this.row = 0;
        this.col = 0;
    }
    creatbored() {
        let row = prompt('pls enetr number of row (min 4 rows)')
        row = row < 4 ? 4 : row;
        let column = prompt('pls enter number of column (min 4 column)')
        column = column < 4 ? 4 : column
        let bored = []
        for (let i = 0; i < column; i++) {
            let div_arr = []
            for (let j = 0; j < row; j++) {
                div_arr.push( < BorderCells columnnumber = { i }
                    rownumber = { j }
                    />)
                }
                bored.push(div_arr)
            }
            console.log(bored)
            return bored;

        }


    }
    export default Bored