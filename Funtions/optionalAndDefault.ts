function checkOptional(name:string,address:string,phone:number){
    return name + " " +address+" "+phone;
}
checkOptional("Nitesh","Tokha",9841252902) //Valid 
// checkOptional("Hello","World") Invalid because the parameters are compulsory ie required 3 values
//  but passed only 2 values
