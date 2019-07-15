/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    someNum = Math.abs(someNum);
    if(someNum==0)
        return true;
    else if(someNum==1)
        return false;
    else
        return isEven(someNum-2);
}
console.log(isEven(7));