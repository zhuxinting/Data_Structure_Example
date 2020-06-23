function fastSort(arr) {
    if(arr.length == 0) {
        return [];
    }
    let lesser = [];
    let greater = [];
    // qivot为基准值
    let qivot = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < qivot) {
            lesser.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }
    return fastSort(lesser).concat(qivot, fastSort(greater));
}