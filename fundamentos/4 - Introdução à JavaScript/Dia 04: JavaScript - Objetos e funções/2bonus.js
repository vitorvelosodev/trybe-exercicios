const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(arr) {
    let par = [];
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            if (arr[i][j] % 2 == 0) {
                par.push(arr[i][j]);
            }
        }
    }
    return par;
}

console.log(arrayOfNumbers(vector));