// 冒泡排序
function bubbleSort(arr) {
    let len = arr.length;
    let temp;
    for (var i=0; i<len; i++) {
        for(var j = 0; j<len-i-1; j++ ) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
}



// 选择排序
function selectSort(arr) {
    let len = arr.length;
    for(var i=0; i<len-1; i++) {
        let smallIndex = i;
        let temp;
        for(var j=i+1; j<len; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[smallIndex];
        arr[smallIndex] = temp;
    }
}


// 插入排序
function insertSort(arr) {
    let len = arr.length;
    for(var i=1; i<len; i++) {
        let temp = arr[i];
        for(var j=i-1; j>=0; j--) {
            if(temp<arr[j]) {
                arr[j+1] = arr[j];
                if(j==0) {
                    arr[j] = temp;
                }
            } else {
                arr[j+1] = temp;
                break;
            }
        }
    }
}


function quickSort(arr) {
    function sort(i, j) {
        var start = i, 
        end = j;
        var base = 0;
        if (j-i > 1) {
            while(i !== j) {
                console.log(i, j);;
                if (arr[i] > arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    if (base === i) {
                        base = j;
                        i++;
                    } else {
                        base = i;
                        j--;
                    }
                } else {
                   if (base === i) {
                        j--;
                    } else {
                        i++;
                    } 
                }
            }
            sort(start, i+1);
            sort(i+1, end+1);
        }
    }

    sort(0, arr.length);
    
}


console.log(quickSort([5,12,52,14,25,32,65,12,1]));