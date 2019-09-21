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
      //changing state of diet
      
      this.setState({diet:true});
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
          gender: '',
          diet:false
          
        };
        this.calculateBMR = this.calculateBMR.bind(this);
        this.gender = this.gender.bind(this);
        //this.dietPlan = this.dietPlan.bind(this);
      }
    render() {
      var dietChart;
       if(this.state.diet===false)
       {dietChart = '';}
       else if(this.state.diet===true)
       {dietChart = <DietPlan protein={this.state.protein} carbohydrate={this.state.carbohydrate} />;  }
       
        return (
            <div >
            <div className="bg"></div>
            <h1>Fitness Pal</h1>            
            <h3>Customized Fatloss Diet Plans</h3>
            <div className="container" >


            <form id="input" onSubmit={this.calculateBMR} >
            <input type="float" ref="weight" placeholder="Enter Your Weight in Kg" required/><br />
            <input type="float" ref="height" placeholder="Enter Your Height in cm" required/><br />
            <input type="number" min="15" ref="age" placeholder="Enter Your Age" required/><br />
            <input type="radio" name="gender" value="male" onChange={this.gender} required/><span className="gender">Male</span>
            <input type="radio" name="gender" value="female" onChange={this.gender} required/><span className="gender">Female</span>
            <br /> 
            <input  type="submit" value="Submit" />
            </form>
            </div>
            <div className="container daily">
           <h4>Your Daily Calories are: {this.state.dailyCalories} Cal</h4>
           <h4>Your Daily Protein Requirement is: {this.state.protein} gms</h4>
           <h4>Your Daily Carbohydrate Requirement is: {this.state.carbohydrate} gms</h4>
           <h4>Your Daily Fat Requirement is: {this.state.fat} gms</h4>
           {dietChart}
           </div> 
           </div>
        )
    }
}

export default Measurements
