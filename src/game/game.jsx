import React from 'react';
// import BorderCells from './cells'
import  Board from '../board/board.js';
import Player from "../player/player.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./game.css";


const testboard = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           player1: null,
           player2: null,
           board: testboard,
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
                currentPlayer: this.state.player1
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

    move(){

    }

 
    render(){
        const {board,currentPlayer} = this.state;
        return(
            <div className={"game"}>
             {/* <h1>`Current Player: {currentPlayer.name}`</h1> */}
                <div className={"board"}> 
                    {board? board.map(row => row.map((cell,i) => <div className={`cell colum${i+1}`}>{cell}</div>)): ""}
                    
                </div>

            </div>
    )
  }
}
export default Game;