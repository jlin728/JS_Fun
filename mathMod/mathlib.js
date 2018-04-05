module.exports = function (){
    return {
      add: function(num1, num2) { 
           console.log("Answer: " + (num1+num2));
      },
      multiply: function(num1, num2) {
            console.log("Answer: " + (num1*num2));
      },
      square: function(num) {
            console.log("Answer: " + (num*num));
      },
      random: function(min, max) {
            console.log("Random #: " + Math.floor(   Math.random()*(max - min) + min   ));
      }
    }
  };
