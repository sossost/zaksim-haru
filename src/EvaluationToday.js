const diaryParagraph = document.querySelector(".diary_paragraph");

function emojiClickHandler(e) {
  if (e.target.className === "emoji") {
    const selectedEmoji = document.querySelector(".selected_emoji");
    selectedEmoji.className = "emoji";
    e.target.className = "selected_emoji";
  }
}

function diaryParagrapthClickHandler(e) {
  // if (e.target.className === "diray_paragraph") {
  const content = e.target.innerText;
  document.querySelector(
    ".diary_content"
  ).innerHTML = `<textarea class="diary_textarea" >${content}</textarea>`;
  // }
  const diaryTextarea = document.querySelector(".diary_textarea");
  diaryTextarea.focus();

  diaryTextarea.addEventListener("focusout", diaryTextareaFocusoutHandler);
}

function diaryTextareaFocusoutHandler(e) {
  const content = e.target.value;
  document.querySelector(
    ".diary_content"
  ).innerHTML = `<p class ="diary_paragraph">${content}</p>`;

  const diaryParagraph = document.querySelector(".diary_paragraph");
  diaryParagraph.addEventListener("click", diaryParagrapthClickHandler);
}

document.addEventListener("click", emojiClickHandler);
// document.addEventListener("click", diaryParagrapthClickHandler);
diaryParagraph.addEventListener("click", diaryParagrapthClickHandler);
