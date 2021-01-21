interface Details {
    // Question mark denotes optional values
    name?:string,
    address?:string,
    age?:number
}
function disDetails(detailsObj:Details){
    console.log(detailsObj.name,detailsObj.address,detailsObj.age)
}
let mObj={name:"Nitesh Wosti",address:"Tokha",age:23}
disDetails(mObj);
