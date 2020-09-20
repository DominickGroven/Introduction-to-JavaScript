/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

function votingAge(age) {
    if (age > 18) {
        return true;
    }

    return false;
}

console.log(votingAge(16));



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

if (hour < 18) {
    greeting = "Good day";
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(parseInt("1999"));

//Task d: Write a function to multiply a*b 



function multiply (a, b) {
    const product = a * b;
    return product;
}

console.log(multiply(1, 5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge(age) {
    const dogAge = age * 7;
    return dogAge
};
console.log(dogAge(17))



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogFeeder(weight, age) {
    if (age >= 1) {
        if (weight <= 5) {
            return weight * 0.05;
        }
        if (weight <= 10) {
            return weight * 0.04;
        }
        if (weight <= 15) {
            return weight * 0.03
        }
        if (weight > 15) {
            return weight * 0.02
        } else if (age <= 1) {
            if (age <= .333) {
                return weight * 0.10;
            }
            if (age <= .58) {
                return weight * 0.05;
            }
            if (age <= 1) {
                return weight * 0.04;
            }
        }

    }
}
console.log(dogFeeder(15, 1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            if (choice2 === "scissors") {
                return "scissors wins";
            }
        }
    }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            } else {
                if (choice2 === "paper") {
                    return "scissors wins";
                }
            }
        }
    
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles(km) {
    let miles = km / 1.609
    return miles
}

console.log(miles(1))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function centimeter(feet) {
    let centimeter = feet * 30.48

    return centimeter
}

console.log(centimeter(1))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function annoyingSong(){
      var bottles
      var bottlesLeft
      for (i = 999; i >= 1 i--){
          if (i == 1){
              bottles = "bottle";
              bottlesLeft = "No bottles of beer on the wall!";
          }else { 
              bottles = "bottles";
              bottlesLeft = i-1 + "bottles of beer on the wall!";
          }console.log(i+" " + bottles+" bottles of beer on the wall,");
          console.log(i+" " + bottles + " of beer,");
          console.log("Take one down, pass it around,");
          console.log(bottlesLeft);
      }
  }




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalc(grade) {
    if (grade > 90) {
        return "A"
    }
    if (grade >= 80) {
        return "B"
    }
    if (grade >= 70) {
        return "C"
    }
    if (grade >= 60) {
        return "D"
    }
    if (grade < 60) {
        return "F"
    }
}

console.log(gradeCalc(75))
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





