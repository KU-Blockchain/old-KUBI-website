/* eslint-disable */
import React from "react";
import { useEffect } from "react";
import { TextInput } from "@mantine/core";

interface State {
  difficulty: string;
  time: string;
  totalKUBIX: string;
}

class Calculator extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      difficulty: "",
      time: "",
      totalKUBIX: "0",
    };
  }

  handleChange(value: string, type: string) {
    if (type == "difficulty") {
      this.setState({ difficulty: value }, () => {this.calcKUBIX();});
      
      
    }
    if (type == "time") {
      this.setState({ time: value }, () => {this.calcKUBIX();});
      
    }
  }

  calcKUBIX() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let multiplier = 0;
    
    if (isNaN(+this.state.time)){
        this.setState({ totalKUBIX: "not valid time" });
        

    }
    else{

        if (this.state.difficulty == "easy") {
        multiplier = 16.5;
        this.setState({
            totalKUBIX: (multiplier * +this.state.time + 1).toString(),
        });
        } else if (this.state.difficulty == "medium") {
        multiplier = 24;
        this.setState({
            totalKUBIX: (multiplier * +this.state.time + 4).toString(),
        });
        } else if (this.state.difficulty == "hard") {
        multiplier = 30;
        this.setState({
            totalKUBIX: (multiplier * +this.state.time + 10).toString(),
        });
        } else if (this.state.difficulty == "very hard") {
        multiplier = 37.5;
        this.setState({
            totalKUBIX: (multiplier * +this.state.time + 25).toString(),
        });
        } else {
        this.setState({ totalKUBIX: "not valid difficulty" });
        }
    }
  }

  render() {
    return (
      <>
      <div>
        KUBIX CALCULATOR
      </div>
      
        <div>
          <TextInput
            placeholder="easy, medium, hard, or very hard"
            label="Difficulty"
            onChange={(event) =>
              this.handleChange(event.currentTarget.value, "difficulty") 
              
            }
            value={this.state.difficulty}
            withAsterisk
          />

          <TextInput
            placeholder="Round up to whole hour"
            label="Estimated Hours"
            value={this.state.time}
            onChange={(event) =>
              this.handleChange(event.currentTarget.value, "time")
            }
            withAsterisk
          />
        </div>
        
        <div>answer: {this.state.totalKUBIX} KUBIX</div>
      </>
    );
  }
}

export default Calculator;
