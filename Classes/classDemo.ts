class Greetings {
    greet:string;

constructor(message:string){
    this.greet=message;
}
greetingFunc() {
    return this.greet;
    }
}
let greeting =new Greetings("Hello! Welcome to TypeScript Practise");