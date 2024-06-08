const hobbies=['sports','dancing'];
console.log(hobbies.map(hobby=>'Hobby:'+hobby));
console.log(hobbies);


const array=['apple','oranges',' ','mango',' ','lemon'];

const newArr=array.map(fruit=>{

    if(fruit==' '){
        return 'empty string';
    }
    else{
        return fruit;
    }
})
console.log(array);
console.log(newArr);

// It is true that we cannot modify const value but
// In javascript array is a reference datatype. The reference datatype store the reference of the data
// than data itself. The reference store in stack memory while data store in heap memory which is dynamic
// hence when we perform any opration on array we dont modify its reference but we can apply operation or modify its data
// which is store in heap memory.

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Creates a new array

console.log(arr2); // Output: [1, 2, 3]
arr2[0]=4;
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2); // Output: false (different references)


const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}


const obj3 = {'key1': 1 , 'key2' : 2};

const obj4 = { ...obj3, key1: 1000}



console.log(obj3)

console.log(obj4)