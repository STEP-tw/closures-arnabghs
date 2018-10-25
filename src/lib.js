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
  let number = input - 2;
  if (input == 2){
    const trackDelta = function(){
      output = {old: input, delta: number, new: input+number}
      return output;
    }
    return trackDelta;
  }
  const trackDelta = function(number){
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
  let firstArray = [];
  for (let index in inputArray){
    firstArray[index] = inputArray[index];
  }
  if (inputArray.length == 1){
    const cycleOne = function(){
      return inputArray[0];
    }
    return cycleOne;
  }
  let index = -1;
  const cycleColours = function(){
    if (index < firstArray.length-1){
      index += 1;
    } else {
      index = 0;
    }
    return firstArray[index];
  }
  return cycleColours;
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
