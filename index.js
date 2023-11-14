console.log("hi");

let bookmarkSelectWhite = document.querySelector('[data-js="bookmark-white"]');
let bookmarkSelectBlack = document.querySelector('[data-js="bookmark-black"]');

bookmarkSelectBlack.addEventListener("click", () => {
  console.log("selectblack");
  bookmarkSelectBlack.classList.add("hiddenBookmark");
});

bookmarkSelectWhite.addEventListener("click", () => {
  console.log("selectwhite");
  bookmarkSelectBlack.classList.remove("hiddenBookmark");
});

let answer1 = document.querySelector('[data-js="Answer1"]');
let question1 = document.querySelector('[data-js="Question1"]');
let button1 = document.querySelector('[data-js="Button1"]');
console.log(answer1, question1, button1);

button1.addEventListener("click", () => {
  console.log("button1select");

  answer1.classList.toggle("hiddenAnswer");
  console.log(button1);

  if (button1.textContent === "Hide Answer") {
    console.log("showanswerclick");
    button1.textContent = "Show Answer";
  } else {
    console.log("firstclick");
    button1.textContent = "Hide Answer";
  }
});
