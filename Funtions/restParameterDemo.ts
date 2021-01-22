function placeList(...placesName:string[]){
    return placesName.join(" ");
}
let res=placeList("Anamnagar","Kalanki","Sankhamul","Basundhara")
console.log(res);