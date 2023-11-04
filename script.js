const button = document.getElementById("btn");
const list = document.querySelector(".listcontainer");
const text = document.getElementById("add_text");
const audio = new Audio("./Party Horn - Sound Effect (HD).mp3");

button.addEventListener("click", function () {
  if (text.value == "") {
    alert("Enter something to add in the list");
  } else {
    // Create list item
    let li = document.createElement("li");
    li.innerHTML = text.value;
    list.appendChild(li);

    // Attach click event listener to the new list item
    li.addEventListener("click", function () {
      li.classList.toggle("clicked");
      audio.play();
      li.classList.add('animate__animated', 'animate__fadeOut');
      setTimeout(() => {
        li.remove();
        savedata();
      }, 1000);
    });

    // Clear input field
    text.value = "";
    savedata();
  }
});

// Load saved data on page load
window.onload = function () {
  showdata();
};

// Save data to local storage
function savedata() {
  localStorage.setItem("listItems", list.innerHTML);
}

// Load data from local storage
function showdata() {
  if (localStorage.getItem("listItems")) {
    list.innerHTML = localStorage.getItem("listItems");
    // Attach event listeners to new li elements
    const lis = document.querySelectorAll("li");
    lis.forEach(function (checked) {
      checked.addEventListener("click", function () {
        checked.classList.toggle("clicked");
        audio.play();
        checked.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(() => {
          checked.remove();
          savedata();
        },1000);
      });
    });
  }
}
