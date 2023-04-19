// CALLBACK, SETTIMEOUT, SETINTERVA 
// JS là một ngôn ngữ bất đồng bộ 


console.log('Hello world from HTML');

let sum =  (a, b, callback) =>{
    let tong = a + b;
    setTimeout(() => { // hàm tạo độ trễ;
        callback(tong); 
    },5000);

    let i = 0;
    let timer = setInterval(() => {     // hàm chạy vô hạn;
        callback(tong); 
        i++;
        if(i === 5){
            clearInterval(timer); // hàm xóa vòng chạy vô hạn
        }
    },1000);
    

}

let printSum = (message) => {
    console.log(">> check sum:", message);
}


sum(6, 9, printSum);
