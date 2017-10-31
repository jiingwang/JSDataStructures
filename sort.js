// 快排
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

var arr = [2,3,4,52,2,112,123,123,5436,2134234,2342368,3431,4545,123];
console.log(quickSort(arr));
// [ 2, 2, 3, 4, 52, 112, 123, 123, 123, 3431, 4545, 5436, 2134234, 2342368 ]
