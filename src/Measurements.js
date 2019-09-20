import React, { Component } from 'react'
import DietPlan from './DietPlan'
import './App.css'

class Measurements extends Component {
    //gender selection multiple factor
    gender(event){
        var gender = this.state.gender;
        if(event.target.value==='male'){
           
            gender='male';
            this.setState({gender: gender}, function () {
              
              
            });
        }
        else if (event.target.value==='female'){
          
          gender='female';
          this.setState({gender: gender}, function () {
            
            
          });
        }
      }
      //calculating bmr, daily calories, daily macros
    calculateBMR(event){
      event.preventDefault();
      var weight = this.refs.weight.value;
      var height = this.refs.height.value;
      var age = this.refs.age.value;
      if(this.state.gender==='male'){
      var bmr = (13.397 * weight) + (4.799 * height) - (5.677 * age)+ 88.362;
      }
      else if(this.state.gender==='female'){
        bmr = (9.247 * weight) + (3.098 * height) - (4.330 * age)+ 447.593;
      }
      var maintainCalories = bmr * 1.3;
      
      var dailyCalories = Math.floor(maintainCalories - 500);
      this.setState({dailyCalories: dailyCalories});
      var protein = Math.floor((1/8)*dailyCalories);
      this.setState({protein: protein});
      var carbohydrate = Math.floor((3/40)*dailyCalories);
      this.setState({carbohydrate:carbohydrate });
      var fat = Math.floor((1/45)* dailyCalories);
      this.setState({fat: fat});
  
    }
    constructor(props){
        super(props);	
        this.state = {
          dailyCalories: 0,
          protein: 0,
          carbohydrate: 0,
          fat: 0,
          gender: ''
          
        };
        this.calculateBMR = this.calculateBMR.bind(this);
        this.gender = this.gender.bind(this);
        //this.dietPlan = this.dietPlan.bind(this);
      }
    render() {
        return (
            <div className="bg">
            <h1>Fitness Pal</h1>
            <h3>Customized fatloss diet plans</h3>
            <form onSubmit={this.calculateBMR} >
            <input type="float" ref="weight" placeholder="enter you weight in Kg's" />
            <input type="float" ref="height" placeholder="enter you height in cms" />
            <input type="number" min="15" ref="age" placeholder="enter your age" />
            <input type="radio" name="gender" value="male" onChange={this.gender} />Male
            <input type="radio" name="gender" value="female" onChange={this.gender} />Female

            <input type="submit" value="Submit" />
            </form>
           <h2>your daily Calories are: {this.state.dailyCalories} Calories</h2>
           <h2>your daily protein requirement is: {this.state.protein} gms</h2>
           <h2>your daily carbohydrate requirement is: {this.state.carbohydrate} gms</h2>
           <h2>your daily fat requirement is: {this.state.fat} gms</h2>
           <DietPlan protein={this.state.protein} carbohydrate={this.state.carbohydrate} />
            </div>
        )
    }
}

export default Measurements
