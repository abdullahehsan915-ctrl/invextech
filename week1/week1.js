//1Reverse a string without using reverse()


let str = "Hello World!";
let str2 ="";

for (i=str.length-1; i>=0; i--){

    str2+=str[i]


}
console.log(str2);

//Find the missing number in [1,2,4,5]

let array =[1,2,4,5]
let missing = 0;

for (i=0; i<array.length-1; i++){
let next = array[i]+1;
if(array[i+1] !== next){
    missing = next;
}}
console.log(missing);

//3Check if a string is a palindrome, without reverse()

let str = "Hello World!";
let str2 ="";

for (i=str.length-1; i>=0; i--){

    str2+=str[i]



}
    if(str2==str){
        console.log("plaindrome")
    }
    else{
        console.log("not plaindrome")
    }
console.log(str2);

//Find the largest and smallest number without Math.max/Math.min

let array = [1,2,4,5,,63,,634,3,,5322,52]
let largest = 1;

for ( let i =0; i<array.length;i++){
    if(array[i]>largest){
        largest = array[i];
        
        
    }

}
console.log(largest)

//smallest number
let array = [1,2,4,5,,63,,634,3,,5322,52]
let smallest = 1;
for ( let i =0; i<array.length;i++){
    if(array[i]<smallest){
        smallest = array[i];
        
        
    }

}
console.log(smallest)


//Find what two arrays have in common, without using filter() and includes() together
array1 =[1,2,3,4,6,7];
array2 = [1,2,,4,74,6];
common = []

for(let i=0; i<array1.length; i++){
    for (j=0; j<array2.length; j++){
        
        if (array1[i]==array2[j]){
            common.push(array2[j])
        
        }
    }
}
console.log(common);



//Find duplicates in an array


array = [1,2,4,6,3,4,5,2,2,6,7]
repeating = []

for (let i=0; i<array.length; i++){
    for(let j=i+1; j <array.length; j++)
    if(array[i]==array[j])
    repeating.push(array[j])
    
}
console.log(repeating)


//A teacher has 23 candies to split evenly among 5 students. Write a function that returns how many candies each student gets, and how many are left over.
candies=23;
students=5;
count= 0;
function distribution(total,stu){
    remaning= total;
    while (remaning>=stu){
        count++
        remaning=remaning-stu;
    }
    return remaning
    
}
console.log(distribution(candies,students) "each student get");

//A CRM holds 10 contacts, and 4 of them are marked as duplicates. Write a function that returns the percentage that's clean.

function average (total,duplicate){
    rem  = total-duplicate;
    percentage = (rem/total)*100;
    return percentage;
    
    
}
console.log(average(10,4))

//todoapp
let todo = [];

while (true) {
    let action = prompt("Enter action: add, list, delete, quit");

    if (action === "add") {
        let task = prompt("Enter your task");
        todo.push(task);
    }

    else if (action === "list") {
        console.log(todo);
    }

    else if (action === "delete") {
        let index = Number(prompt("Enter index to delete"));
        todo.splice(index, 1);
        console.log(todo);
    }

    else if (action === "quit") {
        break;
    }

    else {
        console.log("Invalid action");
    }
}