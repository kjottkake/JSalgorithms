let numbers = [];

function genNumbers(){
    let i = 0;

    for (i; i < 10000; i++){
        numbers.push(Math.floor(Math.random() * 10000));
    }
    console.table(numbers);
}

//bubblesort
function bubbleSort(arr){
    let t0 = performance.now() //testing speed
    let len = arr.length;
    for (i = len-1; i >=0; i--){
        for (j = 1; j<=i; j++){
            if (arr[j-1] > arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    let t1 = performance.now() //testing speed
    console.log("Call to bubbleSort took " + (t1 - t0) + " milliseconds.") //output speed test
    return arr;
}

//selection sort
function selectionSort(arr){
    let t0 = performance.now() //testing speed
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(arr[j]<arr[minIdx]){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    let t1 = performance.now() //testing speed
    console.log("Call to bubbleSort took " + (t1 - t0) + " milliseconds.") //output speed test
    return arr;
  }
