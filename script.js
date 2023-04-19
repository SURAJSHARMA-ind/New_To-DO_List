const button = document.getElementById("btn");
const text_container = document.querySelector(".text_container");
// const text = document.getElementById("add_text");

button.addEventListener("click", function() {

    let text = document.createElement("textarea");
    text_container.appendChild(text);
    text.placeholder="Enter something"
    

    // Add remove button
    let crsbtn = document.createElement("span");
    crsbtn.innerHTML = "X";
    text_container.appendChild(crsbtn);

    // Attach event listener to new li element
    crsbtn.addEventListener("click", function(a) {
        text.remove();
        crsbtn.remove();
        console.log("clicked")
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
  localStorage.setItem("listItems", text_container.innerHTML);
}

// Load data from local storage
function showdata() {
  if (localStorage.getItem("listItems")) {
    text_container.innerHTML = localStorage.getItem("listItems");

    // Attach event listeners to new textarea and span elements
    const textareas = document.querySelectorAll(".text_container textarea");
    const spans = document.querySelectorAll(".text_container span");
    textareas.forEach(function(textarea, index) {
      spans[index].addEventListener("click", function() {
        textarea.remove();
        spans[index].remove();
        savedata();
      });
    });
  }
}

