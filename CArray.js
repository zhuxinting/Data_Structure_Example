function CArray(numElements){
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    // swap() 用于交换数组
    this.swap = swap;
    for( var i=0; i<numElements; i++) {
        this.dataStore[i] = i;
    }
}
// 插入新数据
function insert(element) {
    this.dataStore[this.pos++] = element;
}
// 显示数组数据
function toString() {
    var restr = "";
    for(var i=0; i<this.dataStore.length; ++i){
        restr += this.dataStore[i] + " ";
        // 每隔10个数据换行
        if(i > 0 && i%10 == 0) {
            restr += "\n";
        }
    }
    return restr
}
// 清空数组
function clear() {
    for(var i=0; i<this.dataStore.length; i++){
        this.dataStore[i] = 0;
    }
}
// 生成随机数据
function setData() {
    for(var i=0; i<this.numElements; i++){
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
}
// 交换数组元素
function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// 使用测试平台
var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());