import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import AccountsApp from "./Components/AccountsApp"
import CommunityApp from "./Components/CommunityApp"
import LinkedListApp from "./Components/LinkedListApp"

//import Icons from './Components/Icons';
import icon1 from "./Components/cheers.svg";
import icon2 from "./Components/crown.svg";
import icon3 from "./Components/icons8-music.svg";
import icon4 from "./Components/calculator.svg";
import MathComp from "./Components/MathComp";


// import Account from "./Components/Account";

class App extends Component {
    constructor () {
      console.log("Here1");
       super()
       this.state = {
        event : "First React-App",
        onShow : null,
    }

        this.onIconClick = this.onIconClick;
  }

     onIconClick = (e) => {
            console.log("Here3");
            if(e.target.id === "cheers-icon") {
              this.setState ({
                event: 'You click on cheers icon!', 
                onShow: <CommunityApp/> 
          })
          } else if
            //console.log(e);
              (e.target.id === "crown-icon") {
              this.setState ({
                event: 'You click on crown icon!', 
                onShow: <MathComp />,  
            })
          } else if
            //console.log(e);
              (e.target.id === "music-icon") {
              this.setState ({
                event: 'You click on music icon!', 
                onShow: <LinkedListApp /> 
            })
          } else if
            //console.log(e);
              (e.target.id === "calc-icon") {
              this.setState ({
                event: 'You click on calculator icon!', 
                onShow: <AccountsApp />   
            })
          }
        }

  // }
  // render() {
  //   let toShow;
  //   if (this.state.compToShow === "cheers"){


  //   toShow = 
  //   <div>
  //   <mathComp/>
  //   </div>
  // }

    render() {
      //console.log("Here2");

        return (
            <div className="App">
          

            <h1>{this.state.event}</h1>

        
        
      
            <div>
            
              <img onClick={this.onIconClick} src={icon1} className="glasses-logo" id="cheers-icon"  alt=" "></img>
              <img onClick={this.onIconClick} src={icon2} className="king-logo" id="crown-icon"  alt=" "></img>
              <img onClick={this.onIconClick} src={icon3} className="music-logo" id="music-icon"  alt=" "></img>
              <img onClick={this.onIconClick} src={icon4} className="glasses-logo" id="calc-icon"  alt=" "></img>
            </div>

        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

         
         
      

         <div className = "onShow">
            {this.state.onShow}
          </div>

      </div>
              );
  }
}

export default App;
