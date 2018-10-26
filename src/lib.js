const makeConstant = function(input){
 const outputfunction = function (){
   return input;
 }
   return outputfunction;
}

const makeCounterFromN = function(input){
  let number = input -1;
  const countFruits = function(){
    number++;
    return number;
  }
  return countFruits;
 }

const makeCounterFromZero = function(){
  let number = -1;
  const countAnimals = function(){
    number++;
    return number;
  }
  return countAnimals;
}


const makeDeltaTracker = function(input){
   const trackDelta = function(number){
    if (number == undefined){
      number = 0;
    }
    output = {old: input, delta: number, new: input+number}
    input = output.new;
    return output;
  }
  return trackDelta;
}


const makeFiboGenerator = function(arg1,arg2){
  let prevNumber = -1;
  let nextNum = arg2 - arg1;
  if ( arg2 == undefined){
    prevNumber = -1;
    nextNum = 1;
  }
  const getNextFiboNum = function(){
    let currentNum = prevNumber + nextNum;
    prevNumber = nextNum;
    nextNum = currentNum;
    if (arg1 == undefined && arg2 == undefined){
      return currentNum;
    } else if (arg2 == undefined){
      return currentNum*arg1;
    }
    return currentNum;
  }
  return getNextFiboNum;
}

const makeCycler = function(inputArray){
  let firstArray = inputArray.slice(0);
  let index = 0;
  let length = firstArray.length ;
  return function(){
    return firstArray[index++%length];
  }
}

const curry = function(functionName,outerInput){
  const funcForAll = function (firstArg,secondArg){
    return functionName(outerInput,firstArg,secondArg);
  }
  return funcForAll;
}

const compose = function(func1,func2){
  const funcToReturn = function(input1,input2){
    return func1(func2(input1,input2));
  }
  return funcToReturn;
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
