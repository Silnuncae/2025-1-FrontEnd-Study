let root = document.getElementById("root");
let button = document.getElementById("call");

function render(users) {
  for (let i = 0; i < users.length; i++) {
    console.log(users);
    let nameTag = document.createElement("h2");
    nameTag.innerText = users[i].name;
    root.appendChild(nameTag);
  }
}

function onButtonClick() {
  console.log("버튼 클릭됨");

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => render(json));
}

button.addEventListener("click", onButtonClick);
