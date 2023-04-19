console.log('Hello world from HTML');



// let arr = [1,2,3,4,5,6,7,8,9,10];
//  filter, find

let arr = [
    { name: 'Hung', age: 18},
    { name: 'CR7', age: 25},
    { name: 'Anh', age: 13},
    { name: 'Bao', age: 15},
    { name: 'Hoang', age: 26},
    { name: 'Nam', age: 18},
]

let filter = arr.filter((item, index) => {
    // console.log('>>> check filter: item:', item, 'index:', index);
    return item && item.age === 18;
});

console.log(filter);

/*


Note:
filter : search full item which is correct the condition
find: search the first item which is correct the condition
*/