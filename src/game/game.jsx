import React from 'react';
// import BorderCells from './cells'
import  Board from '../board/board.js';
import Player from "../player/player.js";
import './game.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           player1: {},
           player2: {},
           board: Board.creatbored(),
           counter:0,
           currentPlayer: null,
           winner:null
        }
    }
    componentWillMount(){
        this.setPlayers(2);
        
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
            },()=>this.setState({currentPlayer:this.state.player1}))
        }
    }

    switchPlayer(){
        const {currentPlayer, player1, player2 } = this.state;
        if(currentPlayer == player1){
            this.setState({
                currentPlayer: player2
            });
        }else{
            this.setState({
                currentPlayer: player1
            });
        }
       
    }
    pushcoin(e,player){
        if(Board.moveplayer(e,player)){
            this.state.counter++
        }
        this.setState({board:Board.board})

    }
    checkIfPlayerWin(currentPlayer){
        if(Board.checkrow(Board.pointlocation,this.state.currentPlayer)){
           this.state.winner=currentPlayer;
           console.log("row winner with  is :",this.state.winner)
            return true
        }
        if(Board.checkcolumn(Board.pointlocation,this.state.currentPlayer)){
            this.state.winner=currentPlayer;
            console.log("column winner is:",this.state.winner)
            return true
        }
        if(Board.checkdiagnallefttoright(Board.pointlocation,this.state.currentPlayer)){
            this.state.winner=currentPlayer;
            console.log("diagnal winner winner is:",this.state.winner)
            return true
        }
        if(Board.checkdiagnalrighttoleft(Board.pointlocation,this.state.currentPlayer)){
            this.state.winner=currentPlayer;
            console.log("diagnal winner winner is:",this.state.winner)
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

    resetGame(){
        this.setState({board:Board.creatbored(),winner:null,counter:0})
    }

 
    render(){
        const {board,currentPlayer,winner} = this.state;
        return(
            <div className={"game"}>
             <h1>Current Player: {currentPlayer ? currentPlayer.name : ""}</h1>
                <div className="board">
                 {board?board.map((row,i) =>
                 <div className="d-flex"  onClick={(e)=>
                    { 
                    if(!winner){
                       
                        this.pushcoin(e,currentPlayer)

               
                 if(this.checkIfPlayerWin(currentPlayer)){

                     alert(`ther is awinner ${this.state.winner.name}`)
                     if ( window.confirm(`winner is already decided do you want to start again`)){
                        this.resetGame()
                        }
                 }
                  if(this.checkIfBoaredFull()){
                    alert('boared is full')
                }
                else{
                 this.switchPlayer();
                 }
                }
                else if ( window.confirm(`winner is already decided do you want to start again`)){
                    this.resetGame()
                    }
                }
            } > 
                 {row.map((cell,j) =><div className="cell"  column_number={j} style={{width:"100px",height:"100px",borderRadius:"50%",border:"1px solid",
                background:cell!=0 && cell ? cell:""}}>
                    
                 </div>)}</div>):""}
                </div>

            </div>
    )
  }
}
export default Game;
//i changed the h1 elemnt in render and foreach dosnt work with react render()