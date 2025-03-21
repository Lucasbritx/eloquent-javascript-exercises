/* 
    The previous chapter introduced the standard function Math.min that returns its smallest argument.
    We can write a function like that ourselves now. 
    Define the function min that takes two arguments and returns their minimum.
*/

const min = (a, b) => {
    const smallestNumber = a < b ? a : b;
    return smallestNumber;
}
