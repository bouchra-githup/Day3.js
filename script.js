
//Task 1 Selection sort:
let numbers = [9, 14, 10, 18, 12];
function selectionSort(numbers) { 
    let n = numbers.length;
        
    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i+1; j < n; j++){
            if(numbers[j] < numbers[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = numbers[i]; 
             numbers[i] = numbers[min];
             numbers[min] = tmp;      
        }
    }
    return numbers;
}
console.log(selectionSort(numbers));

//Task 2 Bubble sort:
let numbers = [9, 14, 10, 18, 12];
function bubbleSort(numbers) {
  let n = numbers.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
      }
    }
  }
  return numbers;
}
console.log(bubbleSort(numbers));

// Task 3 Insertion sort:
let numbers = [9, 14, 10, 18, 12];
const insertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    let j = i - 1;
    let temp = numbers[i];
    while (j >= 0 && numbers[j] > temp) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = temp;
  }
  return numbers;
}
console.log(insertionSort(numbers));

//Task 4 Linear search:
let numbers = [9, 14, 10, 18, 12];

function linearSearch(numbers, value) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(numbers, 18));

//Task 5 Matrix:

function countZeros(matrix) {
    let zeroCount = 0;

    for (let row of matrix) {
        for (let num of row) {
            if (num === 0) {
                zeroCount++;
            }
        }
    }

    return zeroCount;
}
const matrix = [
    [0, 1, 2, 3],
    [0, 0, 0, 7],
    [0, 7, 0, 3]
];

const result = countZeros(matrix);
console.log(" Count of Zero:", result);















  
 