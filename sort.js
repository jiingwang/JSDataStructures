/**
 * 冒泡排序
 * 时间复杂度 O(n^2)
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
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



/**
 * 选择排序
 * 时间复杂度 O(n^2)
 * @param  {[type]} arr 
 * @return {[type]}     [description]
 */
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
/**
 * 插入排序
 * 时间复杂度 O(n^2)
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
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



/**
 * 快速排序
 * 时间复杂度  O(nlogn)
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function quickSort(arr) {
	function sort(i, j) {
		var start = i,
			end = j;
		var base = i;
		if (j-i>=1) {
			while(i !== j) {
				if (arr[i] > arr[j]) {
					var temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
					if (i === base) {
						base = j;
						i++;
					} else {
						base = i;
						j--;
					}
				} else {
					if (i === base) {
						j--;
					} else {
						i++;
					}
				}
			}
			sort(start, base);
			sort(base+1, end);
			
		} else {
			return;
		}
	}
	sort(0, arr.length-1);
	return arr;
}

n-1  ((n-1)/2 - 1)*2   n-3  n-6

n-1 - 


var arr = [2,3,4,52,2,112,123,123,5436,2134234,2342368,3431,4545,123];
console.log(quickSort(arr));
// [ 2, 2, 3, 4, 52, 112, 123, 123, 123, 3431, 4545, 5436, 2134234, 2342368 ]
