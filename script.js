const memeForm = document.querySelector("#memeForm");
const memeOutput = document.querySelector("#memeOutput");
let memeUrl = document.querySelector("#memeUrl");
let formTopText = document.querySelector("#formTextTop");
let formBtmText = document.querySelector("#formTextBottom");

// Create a submission event listener on the form
memeForm.addEventListener("submit", function(e) {
  // Prevent page from refreshing on submit
  e.preventDefault();
  // If meme url is empty, alert the user
  if (!memeUrl.value) {
    alert("Please enter a url");
  } else {
    // Create a wrapping div for the meme's top text
    let memeTop = document.createElement("div");
    // Create a wrapping div for the meme's bottom text
    let memeBtm = document.createElement("div");
    // Create the p element for the meme's top text
    let memeTopText = document.createElement("p");
    // Create the p element for the meme's bottom text
    let memeBtmText = document.createElement("p");
    // Create the img element for the meme's card
    let memeImg = document.createElement("img");
    // Create the meme wrapper element
    let memeWrapper = document.createElement("div");
    // Create the delete button
    let deleteButton = document.createElement("button");
    // Assign the meme url to the src of the img
    memeImg.src = e.target.elements[0].value;
    // Add the top text input value to the memeTopText p element
    memeTopText.innerText = e.target.elements[1].value;
    // Add the bottom text input value to the memeBtmText p element
    memeBtmText.innerText = e.target.elements[2].value;
    // Assign classes to each of the meme card elements
    memeTop.classList.add("topText");
    memeBtm.classList.add("bottomText");
    memeWrapper.classList.add("memeWrapper", "card");
    deleteButton.classList.add("deleteTag", "delete", "is-small", "is-danger");
    // Append the top text to the top wrapper div
    memeTop.append(memeTopText);
    // Append the bottom text to the bottom wrapper div
    memeBtm.append(memeBtmText);
    // Append all of the meme elements to the wrapper div
    memeWrapper.append(memeImg, memeTop, memeBtm, deleteButton);
    // Add the meme to the DOM
    memeOutput.prepend(memeWrapper);
    // Reset form values
    formTopText.value = "";
    formBtmText.value = "";
    memeUrl.value = "";
  }
});

// Add click listener to the meme output
memeOutput.addEventListener("click", function(e) {
  // If the user clicked the delete icon, remove the element from the DOM
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
