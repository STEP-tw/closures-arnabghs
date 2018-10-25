const makeConstant = function(input){
 let outputfunction = function (){
   return input;
 }
   return outputfunction;
}

const makeCounterFromN = function(input){
  let number = input -1;
  let countFruits = function(){
    number++;
    return number;
  }
  return countFruits;
 }
 







const makeCounterFromZero = undefined;
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
