let itemsA=[1,2,3,4,5]
let itemsB=[6,7,8,9,10]

function swapValue(itemsA,itemsB){
    [itemsA,itemsB]=[itemsB,itemsA]
    return [itemsA,itemsB]
}

[itemsA,itemsB]=swapValue(itemsA,itemsB)

console.log(itemsA,itemsB);