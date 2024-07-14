import React, { Component } from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTicket from "./Component/AddTicket";
import LifeCycle from "./Component/LifeCycle";
import CounterComp from './Component/FunComp/CounterComp';
import ApiCall from './Component/FunComp/ApiCall';
import ApiCallTwo from './Component/FunComp/ApiCallTwo';


export default class App extends Component {

  state ={
    ishide:true
  }

  handlehide = () =>{
    this.setState({ishide : !this.state.ishide})
  }
  render() {
    return (
      <div>
        {/* {this.state.ishide ?   <LifeCycle/> :null} */}

            {/* <button onClick={this.handlehide}>Hide</button> */}
{/* <AddTicket/> */}

{/* <CounterComp/> */}

{/* <ApiCall/> */}

<ApiCallTwo/>
      </div>
    )
  }
}



