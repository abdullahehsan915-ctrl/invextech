// // 1. Sort a list of items by a value
// // No shortcuts allowed. [{name:"Item A",value:50},{name:"Item B",value:20},{name:"Item C",value:80}] sorted from smallest to biggest value becomes [Item B (20), Item A (50), Item C (80)].
// let array = [
//     { name: "Item A", value: 50 },
//     { name: "Item B", value: 20 },
//     { name: "Item C", value: 80 }
// ]

// for (let i=0; i<array.length-1; i++){
//     for(j=0; j<array.length-1; j++)
//         if (array[j].value>array[j+1].value){
//             let temp = array[j]
//             array[j]=array[j+1]
//             array[j+1]=temp
            
  
// }
//     }



// console.log(array) 






// 2. Build a "wait before you act" function (debounce)
// A search box should wait 300 milliseconds after you stop typing before doing anything. If you type "lap", "lapt", "lapto", "laptop" quickly, it should only react once, for "laptop", not four times

// let search = document.querySelector("#search");

// let timer;

// search.addEventListener("input", function () {

//     clearTimeout(timer);

//     timer = setTimeout(function () {

//         console.log(search.value);

//     }, 300);

// });


// [{category:"Fruits",items:["Apple","Mango"]}] becomes [{category:"Fruits",item:"Apple"},{category:"Fruits",item:"Mango"}], with the category attached to each item.

// let old = [
//     {
//         category: "Fruits",
//         items: ["Apple", "Mango"]
//     }
// ];

// let latest = [];

// for (let i = 0; i < old.length; i++) {

//     for (let j = 0; j < old[i].items.length; j++) {

//         let obj = {
//             category: old[i].category,
//             item: old[i].items[j]
//         };

//         latest.push(obj);
//     }
// }

// console.log(latest);


//  Combine two related lists
// users = [{id:1,name:"Ali"}] and orders = [{id:1,total:200}] combine into [{id:1,name:"Ali",total:200}], matched by ID.

// let users = [
//     { id: 1, name: "Ali" }
// ];

// let orders = [
//     { id: 1, total: 200 }
// ];

// let result = [];

// for (let i = 0; i < users.length; i++) {

//     for (let j = 0; j < orders.length; j++) {

//         if (users[i].id === orders[j].id) {

//             let obj = {
//                 id: users[i].id,
//                 name: users[i].name,
//                 total: orders[j].total
//             };

//             result.push(obj);

//         }

//     }

// }

// console.log(result);


