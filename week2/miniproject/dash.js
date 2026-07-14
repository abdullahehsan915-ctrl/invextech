// let employee = document.querySelector(".employee");

// fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(response => response.json())
//       .then(comments =>{
//         console.log(comments)
//         display(comments.slice(0,6))
//       })

//       function display(comments){
//         let groups = document.querySelectorAll(".group")
//         comments.forEach((comment,index) => {
//             comments[index].querySelector("p").textContent = comment.body
//         });
//       }


let employee = document.querySelector(".employee");

fetch("https://jsonplaceholder.typicode.com/comments")
  .then(response => response.json())
  .then(comments => {
    display(comments.slice(0, 6));
  });

function display(comments) {
  let groups = document.querySelectorAll(".group");

  comments.forEach((comment, index) => {
    groups[index].querySelector("p").textContent = comment.body;
    groups[index].querySelector("h5").textContent = comment.name;
    groups[index].querySelector("h6").textContent = comment.email;
  });
}
