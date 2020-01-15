// Element Selectors
const memeForm = document.querySelector("#memeForm");
const memeOutput = document.querySelector("#memeOutput");
let memeUrl = document.querySelector("#memeUrl");
let formTopText = document.querySelector("#formTextTop");
let formBtmText = document.querySelector("#formTextBottom");

memeForm.addEventListener("submit", function(e) {
  e.preventDefault();
  if (!memeUrl.value) {
    alert("Please enter a url");
  } else {
    let memeTop = document.createElement("div");
    let memeBtm = document.createElement("div");
    let memeTopText = document.createElement("p");
    let memeBtmText = document.createElement("p");
    let memeImg = document.createElement("img");
    let memeWrapper = document.createElement("div");
    let deleteButton = document.createElement("button");

    memeImg.src = e.target.elements[0].value;
    memeTopText.innerText = e.target.elements[1].value;
    memeBtmText.innerText = e.target.elements[2].value;

    memeTop.classList.add("topText");
    memeBtm.classList.add("bottomText");
    memeWrapper.classList.add("memeWrapper", "card");
    deleteButton.classList.add("deleteTag", "delete", "is-small", "is-danger");

    memeTop.append(memeTopText);
    memeBtm.append(memeBtmText);
    memeWrapper.append(memeImg, memeTop, memeBtm, deleteButton);
    memeOutput.prepend(memeWrapper);

    formTopText.value = "";
    formBtmText.value = "";
    memeUrl.value = "";
  }
});

memeOutput.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
