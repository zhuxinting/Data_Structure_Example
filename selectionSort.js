// 选择排序
// 将第一位依次与后面的元素相比较，得到最小值，与第一位交换。
// 再用第二位依次与后面元素相比较，得到最小值，与第二位交换。
// 从原始数据中找到最小元素，并放在数组的最前面。
// 然后再从下面的元素中找到最小元素，放在之前最小元素的后面，直到排序完成
function selectionSort(arr) {
    for(var i=0; i < arr.length-1; i++) {
        // 假设一个最小值和索引
        var temp = arr[i];
        var tempIndex = i;
        // 让数组中的每一个元素与之比较
        for(var j=i + 1; j<arr.length; j++) {
            if(temp > arr[j]) {
                temp = arr[j];
                tempIndex = j;
            }
        }
        arr[tempIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}