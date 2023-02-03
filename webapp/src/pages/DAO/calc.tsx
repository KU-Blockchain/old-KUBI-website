/* eslint-disable */
import React from "react";


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
        Calculator: {this.state.totalKUBIX}
    </div>
    </>
  );
};
}


export default Calculator;