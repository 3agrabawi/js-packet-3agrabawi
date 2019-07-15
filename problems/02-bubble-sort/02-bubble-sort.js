/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
 
  let ab=false;
  let counter=0;

  while(!ab){
    ab=true;
    counter++;
    for(let i=0;i<numArray.length-count; i++){
      if(numArray[i]>numArray[i+1]){
        let temp =numArray[i+1];//tem is now the 2nd num in arr
        numArray[i+1]=numArray[i];
        numArray[i]=temp;
        ab=false;
       }
    }
  }
   
  return numArray;  

}

console.log(bubbleSort([5,1,4,3,8,9]));


let bubble = arr => arr.sort( (a, b) => b-a );
console.log(bubble([54, 375, 2, 784, 130, 80, 91, 64, 7, 3, 2653, 462, 36, 352, 125]));