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








const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
