
import React from 'react';
// import BorderCells from './cells'
import  Board from '../board/board.js';
import Player from "../player/player.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const testboard = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           player1: null,
           player2: null,
           board:Board.creatbored(),
           counter:0,
        //    board: new Board(),
           currentPlayer: null
        }
    }
    componentWillMount(){
        this.setPlayers(2);
    }

    setBoard(){
        const row = prompt("Enter number of rows:");
        const colums = prompt("Enter number of colums:");
        this.state.board.init(row,colums);
    }

    setPlayers(numOfPlayers){
        if(numOfPlayers === 2){
            const name1 = prompt("Enter player #1 name:");
            const color1 = "red";
            const name2 = prompt("Enter player #2 name:");
            const color2 = "yellow";
            this.setState({
                player1: new Player(name1,color1),
                player2: new Player(name2,color2),
                currentPlayer:{name:name1,color:color1}
            })
        }
    }

    switchPlayer(){
        const {currentPlayer, player1, player2 } = this.state;
        let switchPlayer; 
        if(currentPlayer === player1){
            switchPlayer = player2;
        }else{
            switchPlayer = player1;
        }
        this.setState({
            currentPlayer: switchPlayer
        });
    }

    pushcoin(e,player){
        if(Board.moveplayer(e,player)){
            this.state.counter++
        }
        this.setState({board:Board.board})

    }
    checkIfPlayerWin(){
        if(Board.checkrow(Board.pointlocation,this.state.currentPlayer)){
            return true
        }
        if(Board.checkcolumn(Board.pointlocation,this.state.currentPlayer)){
            return true
        }
        if(Board.checkdiagnalrighttoleft(Board.pointlocation,this.state.currentPlayer)){
            return true
        }
        else{
            return false
        }
    }
    checkIfBoaredFull(){
        const {board,counter}=this.state
        if(Board.checkifboaredfill(counter,board.length,board[0].length)){
            return true
        }
        else{
            return false
        }
    }
    render(){
        const {board,currentPlayer,counter} = this.state;
        return(
            <div className={"game"}>
             <h1>`Current Player: {currentPlayer ? currentPlayer.name : ""}`</h1>
                <div className={"board d-flex"}>
                 {board? board.map((row,i) =><div onClick={(e)=>{this.pushcoin(e,this.state.player1)
                 console.log(this.state.counter)
                //  if(this.checkIfPlayerWin()){
                //      alert('ther is awinner')
                
                if(this.checkIfBoaredFull()){
                    alert('boared is full')
                }
                 }} 
                 column_number={i}> 
                 {row.map(cell =><div style={{width:"100px",height:"100px",borderRadius:"50%",border:"1px solid",
                color:cell!=0 && cell ? this.state.player1.color:""}}>

                 </div>)}</div>): ""}
                </div>

            </div>
    )
  }
}
export default Game;
//i changed the h1 elemnt in render and foreach dosnt work with react render()