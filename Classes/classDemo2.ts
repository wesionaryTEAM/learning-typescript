class Cars {
    name?:String
    model?:String
    isElectric:boolean

    constructor(name:String,model:String,isElectric:boolean){
        this.name=name
        this.model=model
        this.isElectric=isElectric
    }
    displayInfo():void{
        console.log(this.name+" "+this.model+" "+this.isElectric)
    }
}
let car= new Cars("Toyota","Yaris",false)
car.displayInfo()