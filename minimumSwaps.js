// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(arr) {
  //Varible to hold the number of swaps that occur in the fuction
  let swaps = 0;
  //Loop to run through the array
  for (let i = 0; i < arr.length - 1; i++) {
    //If check to make sure that the value at index being viewed is correct
    if (arr[i] !== i + 1) {
      //Varible to hold the swapped locations value
      let placeholder = arr[arr[i] - 1];
      //Overwrites the swapped location value with the value that is currently being viewed by the loop
      arr[arr[i] - 1] = arr[i];
      //Overwrites the value that is currently being viewed by the loop with the varible held in placeholder
      arr[i] = placeholder;
      //Increases the answer to be returned
      swaps++;
      //decrement the loop to double check the swapped value being viewed is properly placed
      i--;
    }
  }
  //Return the total number of swapped that have occured in the now sorted array
  return swaps;
}
