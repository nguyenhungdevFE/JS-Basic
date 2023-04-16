console.log('Hello world from HTML');


function sum (x, y) {
    x + y; // undefined bởi vì hàm không trả về giá trị gì
    return x + y; // hàm trả vè x + y 
}


console.log('sum = ', sum(6,9));