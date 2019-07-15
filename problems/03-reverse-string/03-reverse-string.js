/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    
    var stringArray = [];
    var tempStr = "";
    for(var i = 0; i < this.length; i++) {
        if(this.charAt(i) === delimiter) {
            stringArray.push(tempStr);
            tempStr = "";
        } else {
            tempStr += this.charAt(i);
        }
    }
    if(tempStr !== "") {
        stringArray.push(tempStr);
    }
    return stringArray;
    
}
console.log(reverseStr("hello"));

