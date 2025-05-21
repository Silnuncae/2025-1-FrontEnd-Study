let root = document.getElementById("root");
let button = document.getElementById("call");

function render(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data);
        let h2Tag = document.createElement("h2");
        h2Tag.innerText = data[i].title;
        root.appendChild(h2Tag);
    }
};

function onButtonClick() {
    console.log("버튼 클릭");
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => render(json));
}

button.addEventListener("click", onButtonClick);
