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




const makeDeltaTracker = undefined;
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
