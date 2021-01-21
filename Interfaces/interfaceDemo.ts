interface PersonalDetails {
    name:string,
}
function displayDetails(detailsObj:PersonalDetails){
    console.log(detailsObj.name)
}
let myObj={name:"Nitesh Wosti"}
displayDetails(myObj);
