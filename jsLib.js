//Can we make this into a method of an object?
function each(arr, cb2) {
  // loop through the array
  for (var i = 0; i < arr.length; i++) {
    cb2(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {

    map: function (arr, callback){
        let newArr = [];
        each(arr, (data) => {
            newArr.push(callback(data));
        });
        return newArr;
    },

    reduce: function (arr, callback){
        let sum = 0;
        each(arr, (data) => {
            sum += data;
        });
        return sum;
    },

    find: function (arr, callback){
        let x;
        
        each(arr, (data) => {
            if (callback(data) && x === undefined){
                x = data;
            };
        });
        return x;
    },


    filter: function(arr, cb) {
                let newArr = [];
                each(arr, (data) => {       //cb2
                    if(cb(data)) {          //cb1
                    arr2.push(data);
                    }
                });
                return newArr;
    },

    reject: function(arr, callback){
        let newArr = [];
        each(arr, (data) => {
            if(!callback(data)) {
            newArr.push(data);
            }
        });
        return newArr;
    },

  }
  
  var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(evens); // if things are working right, this will return [2,4,6].
    
  var map = _.map([1, 2, 3], function(num){ return num * 3;});
  console.log(map);
  
  var sum = _.reduce([1, 2, 3], function(num){ return num;});
  console.log(sum);
  
  var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(even);
  
  var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(odds);




