import React, { Component } from 'react'

class App extends Component {

  calculateBMR(event){
    event.preventDefault();
    var weight = this.refs.weight.value;
    var height = this.refs.height.value;
    var age = this.refs.age.value;
    var bmr = 66.47 + (6.24 * weight * 2.2) + (12.7 * height) - (6.755 * age);
    var maintainCalories = bmr * 1.3;
    var deficit = 0.05* maintainCalories;
    var dailyCalories = Math.floor(maintainCalories - deficit);
    this.setState({dailyCalories: dailyCalories});
    

  }
  
  constructor(props){
    super(props);	
    this.state = {
      dailyCalories: 0,
     
    };
    this.calculateBMR = this.calculateBMR.bind(this);
    
  }
    

  render() {
    
    return (
      <div>
            <form onSubmit={this.calculateBMR} >
            <input type="number" ref="weight" placeholder="enter you weight in Kg's" />
            <input type="number" ref="height" placeholder="enter you height in inches" />
            <input type="number" min="1" ref="age" placeholder="enter your age" />
            <input type="submit" value="Submit" />
            </form>
           <h1>your daily Calories are: {this.state.dailyCalories} Calories</h1>
            
            
      </div>
    )
  }
}

export default App
