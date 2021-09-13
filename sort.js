let numbers = [];

function genNumbers(){
    let i = 0;

    for (i; i < 10000; i++){
        numbers.push(Math.floor(Math.random() * 10000));
    }
    console.table(numbers);
}


function bubbleSort(arr){
    let t0 = performance.now()
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

    let t1 = performance.now()
    console.log("Call to bubbleSort took " + (t1 - t0) + " milliseconds.")
    return arr;
}



