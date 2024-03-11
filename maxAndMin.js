let arr=[1,13,20,15,5,62,10]

const maxAndMin=()=>{

    const result=`"The min value is " ${Math.min(...arr)} "and max value is" ${Math.max(...arr)}`

    return result
}
console.log(maxAndMin());

