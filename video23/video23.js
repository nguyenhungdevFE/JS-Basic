console.log('Hello World from HTML');

// Redude 
// reduce sẽ truyền vào 1 callback

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

let sumArr = arr.reduce((previousValue, currentValue) =>{
    return previousValue + currentValue;
});

console.log('>>> check reduce sumArr: ' + sumArr);

