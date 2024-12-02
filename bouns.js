//bouns not resolved yet
var createCounter = (init)=> {
    let count = init; 
    let counter ={ 
        increment   :()=>{return count+1},
        decrement   :()=>{return count-1 },
        reset       :()=>{return count}
    }
    return counter
};
let x =createCounter(0)
console.log(x.increment())
console.log(x.decrement())
console.log(x.reset())
let calls =[x.increment() , x.increment() , x.decrement() ,x.reset()]; 
console.log(calls)