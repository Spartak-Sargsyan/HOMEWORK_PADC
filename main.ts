// gdnel gumakr@
// const arr = [1,2,3,[1,2],[1,[2,3,4],5],1]
// type NestedArray = (number | number[] | NestedArray)[]

// function sum(arr:NestedArray):number{
//     return arr.reduce((acc,item)=>{
//          if(Array.isArray(item)){
//              return acc + sum(item)
//          }
//          else{
//              return acc + item
//          }
//      },0)
//     }
    
//  const arrNumber:NestedArray  = [1,2,3,[1,2],[1,[2,3,4],5],1]
//  const x = sum(arrNumber)
//  console.log(x)


// binarni poisk rekursya
// const arr1 = [5,7,34,65,75,83]

function binarySearchRecursive(arr:number[], k:number, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === k) {
        return middle;
    } else if (arr[middle] > k) {
        return binarySearchRecursive(arr, k, left, middle - 1);
    } else {
        return binarySearchRecursive(arr, k, middle + 1, right);
    }
}

const arr1:number[] = [5, 7, 34, 65, 75, 83];
const sortedArray = arr1.sort((a,b)=> a - b)
const k:number = 83;

const resultIndex = binarySearchRecursive(arr1, k);

if (resultIndex) {
    console.log(resultIndex);
} else {
    console.log('-1');
}

// Грокаем алгоритмы

// fibonachi rekursyaov berel gcain teski