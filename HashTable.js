function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
}
function simpleHash(data) {
    var total = 0;
    for(var i=0; i<data.length; i++) {
        total += data.charCodeAt(i)
    }
    console.log("Hash value: " +data+ "->" +total);
    return total % this.table.length;
}
function betterHash(string) {
    const H = 31;
    var total = 0;
    for(var i=0; i<string.length; i++) {
        total += H*total + string.charCodeAt(i)
    }
    total = total % this.table.length;
    console.log("Hash value: " +string+ "->" +total);
    if(total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total)
}
function showDistro() {
    var n=0;
    for(var i=0; i<this.table.length; i++) {
        if(this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}
function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

// load("HashTable.js")
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for(var i=0; i<someNames.length; i++){
    hTable.put(someNames[i]);
}
hTable.showDistro();