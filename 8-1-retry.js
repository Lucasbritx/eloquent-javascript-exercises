/* 
Say you have a function primitiveMultiply that in 20 percent of cases multiplies 
two numbers and in the other 80 percent of cases raises an exception of type
MultiplicatorUnitFailure. Write a function that wraps this clunky 
function and just keeps trying until a call succeeds, after which it returns the result.
Make sure you handle only the exceptions you are trying to handle.
*/

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Multiplicator unit failure");
  }
}

function CallPrimitiveMultiply() {
  for (;;) {
    try {
      const result = primitiveMultiply(10, 5);
      console.log(result);
      return result;
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) console.log(error);
    }
  }
}

CallPrimitiveMultiply()
