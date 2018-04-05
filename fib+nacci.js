function fib() {
    let a = 1;
    let b = 0;    
    let result= b;

  function nacci() {

    for(var i = 0; i < 11; i++){
    
        console.log(result)
        result = a + b;
        a = b;
        b = result;
      }
    
    }
    return nacci;
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"