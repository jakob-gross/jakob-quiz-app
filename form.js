let formQuestionCard = document.querySelector('[ data-js="question-add"]');
let formAnswerCard = document.querySelector('[data-js="answer-add"]');
let main = document.querySelector("main");
let questionCharactersLeft = document.querySelector(
  '[data-js="question-characters-left"]'
);
let answerCharactersLeft = document.querySelector(
  '[data-js="answer-characters-left"]'
);

// console.log(formAnswerCard, formQuestionCard);

let calcCharactersLeft = function (length) {
  return 150 - length;
};

formQuestionCard.addEventListener("input", (e) => {
  //   console.log(e.target.value.length);
  let lengthOfInput = e.target.value.length;
  let charactersLeft = calcCharactersLeft(lengthOfInput);
  questionCharactersLeft.innerHTML = `characters left ${charactersLeft}`;
});
formAnswerCard.addEventListener("input", (e) => {
  //   console.log(e.target.value.length);

  let lengthOfInput = e.target.value.length;
  let charactersLeft = calcCharactersLeft(lengthOfInput);
  answerCharactersLeft.innerHTML = `characters left ${charactersLeft}`;
});
let form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let question = event.target.elements["question-add"].value;
  let answer = event.target.elements["answer-add"].value;
  let tag = event.target.elements.Tag.value;
  console.log(question, answer, tag);
  const newCard = document.createElement("section");

  newCard.classList.add("card-container");

  newCard.innerHTML = `
  <section class="question-card">  
  

<h4 data-js="Question1">${question}</h4>
<h4 data-js="Answer1" class="hiddenAnswer">
  ${answer}
</h4>

<button class="button" data-js="Button1" type="button">
  Show Answer
</button>
<section class="tag-container">
  <p class="tag">#${tag}</p>
</section>
</section>`;
  main.append(newCard);
});
