let input = document.querySelector("input");
let spans = document.querySelectorAll(".btns span");
let resultes = document.querySelector(".results span");

spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      checkItem();
    }
    if (e.target.classList.contains("add")) {
      addItem();
    }
    if (e.target.classList.contains("delete")) {
      deleteItem();
    }
    if (e.target.classList.contains("show")) {
      showItems();
    }
    if (e.target.classList.contains("clear")) {
      clearAll();
    }
  });
});
// Message For User
function message() {
  resultes.innerHTML = "The input can't be empty!";
}
// CheckItem Function
function checkItem() {
  if (input.value !== "") {
    if (window.localStorage.getItem(input.value)) {
      resultes.innerHTML = `Found item named <span>${input.value}</span>`;
    } else {
      resultes.innerHTML = `No item named <span>${input.value}</span>`;
    }
  } else {
    message();
  }
}
// AddItem Function
function addItem() {
  if (input.value !== "") {
    window.localStorage.setItem(input.value, "Test");
    resultes.innerHTML = `item <span>${input.value}</span> added.`;
    input.value = "";
  } else {
    message();
  }
}
// DeleteItem Function
function deleteItem() {
  if (input.value !== "") {
    if (window.localStorage.getItem(input.value)) {
      window.localStorage.removeItem(input.value);
      resultes.innerHTML = `item <span>${input.value}</span> is deleted.`;
      input.value = "";
    } else {
      resultes.innerHTML = `No item named <span>${input.value}</span> to deleted.`;
    }
  } else {
    message();
  }
}
// ShowItem Function
function showItems() {
  if (window.localStorage.length) {
    resultes.innerHTML = "";
    for (let [key, value] of Object.entries(window.localStorage)) {
      resultes.innerHTML += `<span class="key">${key}</span>`;
    }
  } else {
    resultes.innerHTML = "No items to show!";
  }
}
function clearAll() {
  window.localStorage.clear();
}
