import React, { Component } from 'react'

class App extends Component {
     
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
    //preparing customized diet plan 
   dietPlan(){
      //each meal protein and carbs required
    var eachMealProtein = Math.floor(this.state.protein/7);
  
    var eachMealCarb = Math.floor(this.state.carbohydrate/3);
   
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
      dailyCalories: 0,
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      gender: '',
      notes: '',
        breakfast: '',
        morningSnack: '',
        lunch: '',
        eveningSnack: '',
        dinner: '',
        nightSnack:''
      
    };
    this.calculateBMR = this.calculateBMR.bind(this);
    this.gender = this.gender.bind(this);
    this.dietPlan = this.dietPlan.bind(this);
  }
    

  render() {
    
    return (
      <div>
            <h1>fitness pal</h1>
            <form onSubmit={this.calculateBMR} >
            <input type="float" ref="weight" placeholder="enter you weight in Kg's" />
            <input type="float" ref="height" placeholder="enter you height in cms" />
            <input type="number" min="1" ref="age" placeholder="enter your age" />
            <input type="radio" name="gender" value="male" onChange={this.gender} />Male
            <input type="radio" name="gender" value="female" onChange={this.gender} />Female

            <input type="submit" value="Submit" />
            </form>
           <h1>your daily Calories are: {this.state.dailyCalories} Calories</h1>
           <h2>your daily protein requirement is: {this.state.protein} gms</h2>
           <h2>your daily carbohydrate requirement is: {this.state.carbohydrate} gms</h2>
           <h2>your daily fat requirement is: {this.state.fat} gms</h2>
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

export default App
