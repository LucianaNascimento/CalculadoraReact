import React from "react";
import { Component } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { HandleEqual } from "./components/Equal";
import "./App.css"



class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: " "
    };
   
  }
  
  addToInput = val =>{
    this.setState({input: this.state.input + val});
  }


  handleEqual = () => {
    try {      
      this.setState( { input: eval(this.state.input)}
      )}
     catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

    

  render(){
    return (
    <div className="container">
        <div className="grid-template-areas">
            <Input disabled input={this.state.input}/>

            <ClearButton handleClear={()=> this.setState({ input: ""})}>AC</ClearButton>
            
            
                       
            <Button handleClick={this.addToInput} >/</Button>

            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>

            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>

            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>

            
            <Button handleClick={this.addToInput}>0</Button>
            
            <HandleEqual handleEqual={() => this.handleEqual()}>=</HandleEqual>

            <Button handleClick={this.addToInput}>,</Button>
        </div>

    </div>

    )
  }
}



export default App;

