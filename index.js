function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0;
    for (let i=1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }

    }
    array.splice(minIndex,1);
    return min;
}

function selectionSort(array){
    let sortedArray = [];
    while (array.length > 0){
        let minVal = findMinAndRemove(array);
        sortedArray.push(minVal);
    }
    return sortedArray;
}
