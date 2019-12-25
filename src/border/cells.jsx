import React from 'react'  
class BorderCells extends React.Component{
    constructor(props){
        super(props);
        this.state={
             width:"100px",
             height:"100px"
        }
    }
// let div=React.createElement('div',{"columnnumber":i,"rownumber":j,style:{width:width,height:height,border:"1px solid",borderRadius:"50%"}})
    render(){
        return(
            <div data-colnumber={this.props.columnnumber} 
                 data-rownumber={this.props.rownumber} 
                 style={{width:this.state.width,
                         height:this.state.height,
                         border:"1px solid",borderRadius:"50%"}}>
                
            </div>
        )

    }

} 
export default BorderCells;