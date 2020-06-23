// 冒泡排序：相邻元素之间两两比较，比较出较大值进行赋值互换，在依次与相邻的元素比较
function bubbleSort(arr) {
    // 外层循环控制比较的轮数
    for(let i=0; i<arr.length-1; i++){
        // 里层循环控制每一轮比较的次数
        for(let j=0; j<arr.length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

var nums = [1,3,9,0,4,0];
var numsSort = bubbleSort(nums);
console.log(numsSort);