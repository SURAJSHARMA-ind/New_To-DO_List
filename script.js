const button = document.getElementById("btn");
const text_container = document.querySelector(".text_container");

button.addEventListener("click", function() {

    let text = document.createElement("textarea");
    text_container.appendChild(text);
    text.placeholder="Enter something"
    

    // Add remove button
    let crsbtn = document.createElement("span");
    crsbtn.innerHTML = "X";
    text_container.appendChild(crsbtn);
    // Add Save button
    let savebtn = document.createElement("span");
    savebtn.innerHTML = "&#10003";
    savebtn.classList.add("savebtn")
    text_container.appendChild(savebtn);

    // Attach event listener to new li element
    crsbtn.addEventListener("click", function(a) {
        text.remove();
        crsbtn.remove();
        savebtn.remove();
        console.log("clicked");
      savedata();
    });
   
    savedata();
});


// Load saved data on page load
window.onload = function() {
  showdata();
};

// Save data to local storage
function savedata() { 
  localStorage.setItem("note_list", text_container.innerHTML);
}

// // Load data from local storage
// function showdata() {
//   if (localStorage.getItem("note_list")) {
//     text_container.innerHTML = localStorage.getItem("note_list");

//     // Attach event listeners to new textarea and span elements
//     const textareas = document.querySelectorAll(".text_container textarea");
//     const spans = document.querySelectorAll(".text_container span");
//     textareas.forEach(function(textarea, index) {
//       spans[index].addEventListener("click", function() {
//         textarea.remove();
//         spans[index].remove();
//         savedata();
//       });
//     });
//   }
// }

