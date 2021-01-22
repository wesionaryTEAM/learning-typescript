function checkDefault(name:string,address?:string,phone?:number){
    return name+" "+address+" "+phone
}
checkDefault("Nitesh") //valid because address and phone are optional 