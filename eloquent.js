
//MINIMUM
var min=function(x,y){
 
 return Math.min(x,y)
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//RECURSION
var isEven=function(num){
  if (num%2===0){
    console.log("even");
    return true
  }
    else{
      console.log("odd");
      return false
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??





//BEAN COUNTING
function countBs(x) {
  return countChar(x, 'B');
}

function countChar(x, y) {
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] === y) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
