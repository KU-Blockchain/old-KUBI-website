/* eslint-disable */
import React from "react";
import { TextInput } from '@mantine/core';


interface State{
    difficulty: string
    time: number
    totalKUBIX: string
}

class Calculator extends React.Component<{},State>{
    constructor(props: {}) {
        super(props);
        this.state = {
          difficulty: "",
          time: 0,
          totalKUBIX: "",
        };
      }

    handleChange(value:  string, type: string){
        if (type == "difficulty"){
            this.setState({difficulty: value });
        }
        

    }

    
    calcKUBIX(){
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let multiplier =  0;

        if (this.state.difficulty == "easy"){
            multiplier = 16.5
            this.setState({totalKUBIX: ((multiplier*this.state.time)+1).toString()})

        }
        else if (this.state.difficulty == "medium"){
            multiplier = 24
            this.setState({totalKUBIX: ((multiplier*this.state.time)+4).toString()})

        }
        else if (this.state.difficulty == "hard"){
            multiplier = 30
            this.setState({totalKUBIX: ((multiplier*this.state.time)+10).toString()})

        }
        else if (this.state.difficulty == "very hard"){
            multiplier = 37.5
            this.setState({totalKUBIX: ((multiplier*this.state.time)+25).toString()})

        }
        else{
            this.setState({totalKUBIX: "not valid difficulty"})
        }
    }



render() {
    
    
  return  (
    <>
    <div>
    <TextInput
      placeholder="easy, medium, hard, or very hard"
      label="Difficulty"
      value ={this.state.difficulty}
      onChange= {(event) => this.handleChange((event.currentTarget.value),"difficulty")}
      withAsterisk
    />

    <TextInput
      placeholder="Round up to whole hour"
      label="Estimated Hours"
      value ={this.state.time}
      withAsterisk
    />
   

    </div>
    <div>

    </div>
    <div> 
        answer: {this.state.totalKUBIX}
    </div>
    </>
  );
};
}


export default Calculator;