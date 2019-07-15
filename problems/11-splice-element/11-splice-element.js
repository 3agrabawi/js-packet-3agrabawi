/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    var array = [2, 5, 9];
    console.log(array)
    var index = array.indexOf(5);
    if (index > -1) {
      array.splice(index, 1);
    }
}
    // array = [2, 9]
    console.log([6,,9,13,23]);

