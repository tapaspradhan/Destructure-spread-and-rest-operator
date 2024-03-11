
let numArr=[20,21,22,23,24,25,26]

function findIndexArr(e){   
        let [first,second,,,,,last]=e
        return [first,second,last]
    }
    console.log(findIndexArr(numArr));