import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTicket from "./Component/AddTicket";
import LifeCycle from "./Component/LifeCycle";
import CounterComp from "./Component/FunComp/CounterComp";
import ApiCall from "./Component/FunComp/ApiCall";
import ApiCallTwo from "./Component/FunComp/ApiCallTwo";
import FormWithReact from "./Component/FormWithReact";
import FormWithReactHookForm from "./Component/FunComp/FormWithReactHookForm";
import SelectDrop from "./Component/FunComp/SelectDrop";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CounterContext from "./Component/FunComp/CounterContext";
import { CartProvider } from "./context/CartContextApi";

export default class App extends Component {
  state = {
    ishide: true,
  };

  handlehide = () => {
    this.setState({ ishide: !this.state.ishide });
  };
  render() {
    return (
      <div>
        {/* {this.state.ishide ?   <LifeCycle/> :null} */}

        {/* <button onClick={this.handlehide}>Hide</button> */}
        {/* <AddTicket/> */}

        {/* <CounterComp/> */}
        {/* <FormWithReact/> */}

        {/* <ApiCall/> */}
        {/* 
<div className="m-4">

        <Link to="/">
        <span className="m-2">Home</span>
         
         </Link>
        <Link to="/form" > 
        <span className="m-2">form</span>
        </Link>

        <Link   to="/select" > 
        <span className="m-2">select</span>
        
        </Link>
        </div> */}

        {/* <Routes>
          <Route path="/" element={<ApiCallTwo />} />
          <Route path="/form" element={<FormWithReactHookForm />} />

          <Route path="/select" element={<SelectDrop />} />
        </Routes> */}

        <h1>Arun</h1>


        <CartProvider>

        <CounterContext /> 




        </CartProvider>

      </div>
    );
  }
}
