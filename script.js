// ************Fetch************
const word = document.querySelector("#input_word").value;
const searchInput = document.querySelector("input");
const translateButton = document.querySelector("button");

let audioObj = "";

// Event listener for hitting "Enter"
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.value) {
    // console.log(e.target.value);
    fetchDictionaryAPI(e.target.value);
    searchInput.value = "";
    // document.querySelector("audio").style.display = "none";
  }
});
// Event listener for clicking "Translate" button
translateButton.addEventListener("click", () => {
  if (searchInput.value) {
    // console.log(searchInput.value);
    fetchDictionaryAPI(searchInput.value);
    searchInput.value = "";
  }
});

const audioBox = document.querySelector("i");
audioBox.addEventListener("click", () => {
  audioObj.play();
});
console.log(audioBox);

// function fetchDictionaryAPI(word) {
//   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then((response) => response.json())
//     .then((json) => {
//       let word = json;
//       console.log(word);

//       console.log(word[0].phonetics[0].audio);
//       console.log(word[0].phonetic);
//       console.log(word[0].meanings[0].partOfSpeech);
//       console.log(word[0].meanings[0].definitions[0].definition);
//       console.log(word[0].meanings[0].synonyms);
//     });
// }

// function createNewElement() {
//   const newElement = document.createElement('ul')
//   newElement.innerHTML = "Fruits:"
//   const newField = document.createElement('li')
//   newField.innerHTML = "apple"
//   document.body.appendChild(newElement).appendChild(newField)
// }
// createNewElement()

function fetchDictionaryAPI(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((json) => {
      let word = json;
      console.log(word);

      console.log(word[0].phonetics[1].audio);
      console.log(word[0].phonetic);
      console.log(word[0].meanings[0].partOfSpeech);
      console.log(word[0].meanings[0].definitions[0].definition);
      console.log(word[0].meanings[0].synonyms);

      // const audioElement = document.createElement("audio");
      // audioElement.controls = "true";
      // const audioSrc = document.createElement("source");
      // audioSrc.src = word[0].phonetics[1].audio;
      // document.body.appendChild(audioElement).appendChild(audioSrc);
      audioObj = new Audio(word[0].phonetics[1].audio);
      // audioObj.play();
    });
}
