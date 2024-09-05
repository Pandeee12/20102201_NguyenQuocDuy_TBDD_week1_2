//Rewrite

//filter
console.log("Filter >10: ")
const number = [45,4,9,16,25];
Array.prototype.myfilter = function(callback){
    let newarr = [];
    for(let i=0;i< this.length;i++){
        if(callback(this[i],i,this))
            newarr.push(this[i]);
    }
    return newarr;
}
var value = number.myfilter((value)=>{
    return value >10;
});
console.log(value);

//find
// Trả về phần tử đầu tiên thỏa mãn điều kiện
// Trả về undefined nếu không tìm thấy phần tử nào thỏa mãn
console.log("Find >10: ")
Array.prototype.myfind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined; 
};
let found = number.myfind(value => value > 10);
console.log(found);

//every
// Nếu có phần tử không thỏa mãn, trả về false
// Trả về true nếu tất cả các phần tử thỏa mãn
console.log("Every >3: ")
Array.prototype.myevery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false; 
        }
    }
    return true;
};

let allGreaterThan3 = number.myevery(value => value > 3);
console.log(allGreaterThan3); 


//Reduce
//Phương thức reduce thực hiện hàm callback trên mỗi phần tử (từ trái sang phải) và tích lũy kết quả
console.log("Reduce: ");
Array.prototype.myreduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};
let sum = number.myreduce((acc, value) => acc + value, 0);
console.log(sum);

//ReduceRight
//Phương thức reduceRight tương tự như reduce, nhưng nó duyệt mảng từ phải sang trái
console.log("ReduceRight: ");

Array.prototype.myreduceRight = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[this.length - 1];
    let startIndex = initialValue !== undefined ? this.length - 1 : this.length - 2;

    for (let i = startIndex; i >= 0; i--) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};
let sumRight = number.myreduceRight((acc, value) => acc + value, 0);
console.log(sumRight); // 99

//map
//Phương thức map trả về một mảng mới với các kết quả từ hàm callback được áp dụng trên từng phần tử của mảng ban đầu
console.log("Map (*2): ");

Array.prototype.mymap = function(callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};
let doubled = number.mymap(value => value * 2);
console.log(doubled); 

//forEach
//Phương thức forEach thực thi hàm callback trên từng phần tử của mảng
console.log("ForEach: ");

Array.prototype.myforEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
number.myforEach(value => console.log(value * 2));



