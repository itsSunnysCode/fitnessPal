import React, { Component } from 'react'
import './App.css'

class DietPlan extends Component {

    //preparing customized diet plan 
   dietPlan(){

    //changing state checker to show diet plan
       var checker = true;
       this.setState({checker: checker});

    //each meal protein and carbs required
  var eachMealProtein = Math.floor(this.props.protein/7);

  var eachMealCarb = Math.floor(this.props.carbohydrate/3);
 
  //breakfast : BROWN BREAD+ BANANA+ WHEY + EGG WHITE OMLETTE
  var brownBread = Math.floor((eachMealCarb - 23)*(100/46));
  
  var brownBreadProtein = Math.floor((brownBread)*(9.7/100));
  var eggWhites = Math.floor((eachMealProtein-brownBreadProtein-13)/3.6);
  this.setState({brownBread: brownBread});
  this.setState({eggWhites: eggWhites});
  //morning snack : 
  var whey = Math.floor(eachMealProtein*(30/25));
  this.setState({whey: whey});
  //lunch : BROWN RICE + BOWL OF SALAD + BOILED CHICKEN
  var brownRice = Math.floor((eachMealCarb-10)*(100/23));

  var brownRiceProtein = Math.floor(brownRice * (2.5/100));
  
  var chicken = Math.floor((eachMealProtein-brownRiceProtein)*100/29);
  this.setState({brownRice: brownRice});
  this.setState({chicken: chicken});


  //evening snack:  whey 
   
  // dinner: CHAPATI +SALAD + LENTILS
    var chapati = Math.floor((eachMealCarb-20)*(100/55));
    
    var dinnerProtein = Math.floor((chapati*(9.61/100))+9);
    
    this.setState({chapati: chapati});
  //before sleep snack: whey + almonds
   var wheyNight = Math.floor((eachMealProtein-dinnerProtein)*(30/25));
    
   this.setState({wheyNight: wheyNight});
  }


    constructor(props){
        super(props);	
        this.state = {
            brownBread:0,
            whey:0,
            wheyNight:0,
            brownRice:0,
            eggWhites:0,
            chapati:0,
            chicken:0,
            checker:false
          
        };
       
        this.dietPlan = this.dietPlan.bind(this);
      }
    render() {
      var plan;
      if(this.state.checker===true){
      plan = <div>
      <p><strong>Notes:</strong><br />
      1.After waking up start your day with a cup of Green Tea.<br />
      2.Take BCAA during workout and {this.state.whey}gms Whey protein post workout.<br />
      3. Drink 250 ml water before and after, 15 minutes of every meal.</p>
      <br />
      <p><strong>For Breakfast:</strong><br />
      Brown Bread({this.state.brownBread}gms) + Banana(100gms) +
       Whey protein (15gms) + {this.state.eggWhites} Egg white omlette.</p>
      <br />
      <p><strong>For Morning Snack:</strong><br />
      Whey protein({this.state.whey}gms) + Water accordingly.</p>
      <br />
      <p><strong>For Lunch:</strong><br />
      Cooked Brown Rice({this.state.brownRice}gms) + Boiled/Grilled Chicken ({this.state.chicken}gms) + Bowl of broccoli.
      </p>
      <br />
      <p><strong>For Evening Snack:</strong><br />
      Whey protein({this.state.whey}gms) + Water accordingly.</p>
      <br />
      <p><strong>For Dinner:</strong><br />
      Chapati({this.state.chapati}gms) + Lentils with no oil during cooking (100gms) + bowl of broccoli.</p>
      <br />
      <p><strong>For Meal before bed:</strong><br />
      Whey protein ({this.state.wheyNight}gms) + Water accordingly + 5-10 almonds.</p>
      </div>;
      }
      else if(this.state.checker===false){
         plan = '';
      }

      return (
            <div className="container">
            <button className="prepare-meal" onClick={this.dietPlan}> Prepare Meals</button>

            {plan}
            </div>
        )
    }
}

export default DietPlan
