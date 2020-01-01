import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/game';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <Router>

   <Switch>
     <Route path={"/boared"} component={Game}/>
          
  
   <Route path="/">
   <div style={{backgroundImage:"url(https://mobilegamegraphics.com/wp-content/uploads/2015/06/1file_1920x1080.jpg)",height:"1000px",backgroundSize:"cover"
    ,display:"flex",justifyContent:"center",alignContent:"center"}}>
        <Link to={"/boared"} style={{display:"flex",alignItems:"center"}}>
          <p style={{border: "1px solid black",
    backgroundColor: "aqua",
    height: "100px",
    width: "139px",
    textAlign: "center",
    padding: "30px",borderRadius:"11px"}}>
          start game
          </p>
        </Link>
   </div>
   </Route>
   </Switch>
   </Router>
  );
}

export default App;
