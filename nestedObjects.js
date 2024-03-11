const person={
    name:"Mithun",
    age:21,
    address: {
        street:"B8, Block B, Industrial area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
}

const extractPersonDetails=(obj)=>{
    const {name,address:{street} }=obj
    return {name,street}
}
console.log(extractPersonDetails(person));