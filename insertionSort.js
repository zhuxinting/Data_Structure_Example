// function insertSort(arr) {
//     var len =arr.length;
//     for (var i=1;i<len; i++) {
//         var temp=arr[i];
//         var j=i-1;//默认已排序的元素
//         while (j>=0 && arr[j]>temp) {  //在已排序好的队列中从后向前扫描
//             arr[j+1]=arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
//             j--;
//         }
//         arr[j+1]=temp;
//     }
//     return arr;
// }

// 插入排序入抓牌，每一次抓牌否跟手里的牌进行比较，从后往前
function insertSort(arr) {
    // 1、准备一个新数组，用来存储抓到手里的牌，先把台面的第一张牌放进来
    let handle = [];
    handle.push(arr[0]);
    // 2、从第二项开始一次抓牌，一直到把牌抓完
    for(let i=1; i<arr.length; i++) {
        // A是新抓的牌
        let A = arr[i];
        // 和handle里的数字进行比较（从后向前）
        for(let j=handle.length-1; j>=0; j--) {
            // B是手里要比较的牌
            let B = handle[j];
            // 如果当前的牌A比手里的B大，把A放到B的后面
            if(A>B) {
                handle.splice(j+1, 0, A);
                break;
            }
            // 如果比到第一项，就在新牌放到最前面
            if(j===0){
                handle.unshift(A);
            }
        }
    }
    return handle;
}

var nums = [1,3,9,0,4,0];
var numsSort = insertSort(nums);
console.log(numsSort);