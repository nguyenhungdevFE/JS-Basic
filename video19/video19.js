let sum = (a,b) =>{
    return a + b;
}


console.log('check sum: 9 + 6 =', sum(6,9));

// function and method chung 1 mục đích sử dụng là để reuse

let obj = {
    name: 'Jett',
    address: 'Ha Tinh',
    getaddress: function() {
        return this.address;
    }
}

console.log('get address:', obj.getaddress);