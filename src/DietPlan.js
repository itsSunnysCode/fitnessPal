import React, { Component } from 'react'
import './App.css'

class DietPlan extends Component {

    //preparing customized diet plan 
   dietPlan(){
    //each meal protein and carbs required
  var eachMealProtein = Math.floor(this.props.protein/7);

  var eachMealCarb = Math.floor(this.props.carbohydrate/3);
 
  //breakfast option 1: OATS+BANANA+WHEY+EGG WHITE OMLETTE
  var oats = Math.floor((eachMealCarb - 23)*(40/27));
  var oatsProtein = Math.floor((oats*5)/40);    
  var eggWhites = Math.floor((eachMealProtein-oatsProtein-13)/3.6);
  
  //breakfast option 2: BROWN BREAD+ BANANA+ WHEY + EGG WHITE OMLETTE
  var brownBread = Math.floor((eachMealCarb - 23)*(100/46));
  
  var brownBreadProtein = Math.floor((brownBread)*(9.7/100));
  var eggWhitesWithBB = Math.floor((eachMealProtein-brownBreadProtein-13)/3.6);
  
  //morning snack : 
  var whey = Math.floor(eachMealProtein*(30/25));
  
  //lunch : BROWN RICE + BOWL OF SALAD + BOILED CHICKEN
  var brownRice = Math.floor((eachMealCarb-10)*(100/23));

  var brownRiceProtein = Math.floor(brownRice * (2.5/100));
  
  var chicken = Math.floor((eachMealProtein-brownRiceProtein)*100/29);
  
  //evening snack:  whey 
   
  // dinner: CHAPATI +SALAD + LENTILS
    var chapati = Math.floor((eachMealCarb-20)*(100/55));
    
    var dinnerProtein = Math.floor((chapati*(9.61/100))+9);
    
    
  //before sleep snack: whey + almonds
   var wheyNight = Math.floor((eachMealProtein-dinnerProtein)*(30/25));
   
   var notes = `1.After waking up start your day with a cup of Green Tea.
   2.Take BCAA during workout and ${whey}gms Whey protein post workout.
   3. Drink 200 ml water before and after, 15 minutes of every meal.`
   this.setState({notes: notes});
    var breakfast = `Breakfast has two options:
    1. Oats(${oats}gms) + Banana(100gms) + Whey protein (15gms) + ${eggWhites} Egg white omlette.
    2. Brown Bread(${brownBread}gms) + Banana(100gms) + Whey protein (15gms) + ${eggWhitesWithBB} Egg white omlette.`
    
    
    this.setState({breakfast : breakfast});

    var morningSnack = ` For Morning Snack:
    Whey protein(${whey}gms) + Water accordingly.
    `
    this.setState({morningSnack: morningSnack});

     var lunch = ` For Lunch:
     Cooked Brown Rice(${brownRice}gms) + Boiled/Grilled Chicken (${chicken}gms) + Bowl of broccoli.
     `
    this.setState({lunch: lunch});

    var eveningSnack = `For Evening Snack:
    whey protein(${whey}gms) + Water accordingly.`
    this.setState({eveningSnack: eveningSnack });

    var dinner = ` For Dinner:
    Chapati(${chapati}gms) + Lentils (100gms) + bowl of broccoli.
`
    this.setState({dinner: dinner});
    
    var nightSnack = ` For Meal before bed:
    Whey protein (${wheyNight}gms) + Water accordingly + 5-10 almonds.
    `
    this.setState({nightSnack: nightSnack});
  }


    constructor(props){
        super(props);	
        this.state = {
            notes: '',
            breakfast: '',
            morningSnack: '',
            lunch: '',
            eveningSnack: '',
            dinner: '',
            nightSnack:''
          
        };
       
        this.dietPlan = this.dietPlan.bind(this);
      }
    render() {
        return (
            <div>
            <button onClick={this.dietPlan}> prepare my meals</button>
            {this.state.notes}
            {this.state.breakfast}
            {this.state.morningSnack}
            {this.state.lunch}
            {this.state.eveningSnack}
            {this.state.dinner}
            {this.state.nightSnack}
 
            </div>
        )
    }
}

export default DietPlan
