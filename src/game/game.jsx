import React from 'react'
// import BorderCells from './cells'
import  Bored from '../border/border.js'
import 'bootstrap/dist/css/bootstrap.min.css'

class Game extends React.Component {

    constructor(props){
        super(props)
        this.state={
           current_player:"black",
           players:[],
           border:new Bored()
        }
    }
    setplayer(numofplaye){
        for(let i=0;i<numofplaye;i++){
            let player
        this.state.players.push(<div><h1>{}</h1></div>)
        }

    }
    render(){
        return(
                    <div className="row game justify-content-center">
                        <div className="border d-flex border border-dark p-2">
                      {this.state.border.creatbored().map((div,i)=><div onClick={(e)=>{
                          let column=e.currentTarget
                          let column_divs=column.childNodes;
                          for(let i=column_divs.length-1;i>=0;i--){
                              if(column_divs[i].style.backgroundColor!="blue"){
                                column_divs[i].style.backgroundColor="blue"
                                console.log(this.state.counter++);
        
                                break;
                              }
                          }
                      }} columnnumber={i}>{div.map((innerdiv)=>innerdiv)}</div>)}
        
                    </div>
                    </div>
                )

    }
}
export default Game;