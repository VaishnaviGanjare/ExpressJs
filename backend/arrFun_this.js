//Product of two numbers
const product=(a,b)=>a*b;
console.log(product(1,2));

//Student object
const student={
    name:"Neha",
    age:24,
    //normal function as arrow function have parent scope hence use normal function to access student obj data
    result(){
        console.log(this.name+" is passed with good marks");
    }
}
student.result();

//arrow function

class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
  setPlacementAge(minPlacementage){
    return (minMarks)=>{
        if(this.marks>minMarks && this.age>minPlacementage){
            console.log(this.name+" is ready for placements");
        }
        else{
            console.log(this.name+" is ready bot for placements");

        }
    }
  }
}
const Yash= new Student('yash', 24, 80);
const Vaibhav=new Student('vaibhav', 29, 79);
Yash.setPlacementAge(18)(40);