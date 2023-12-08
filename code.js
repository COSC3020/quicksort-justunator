function quicksort(array) {
    pivot = 0
    while(pivot < array.length && array.length > 1){// n time
        for(i = 0; i < array.length; i++){ // n time
            if(i != pivot && pivot != array.length-1){
                //console.log(array[pivot])
                //console.log(array)
                if(array[i] < array[pivot] && i > pivot){
                    temp = array[i]
                    for(k = i; k >= pivot; k--){ // scales with n
                        array[k] = array[k - 1]
                    }
                    array[pivot] = temp
                    //console.log(array, "pivot larger")
                }
            }
        }
        pivot++
    }
    return array;
}

//console.log(quicksort([8,7,6,5,9,3,2,3,4])) //debugging
