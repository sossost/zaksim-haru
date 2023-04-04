function emojiClickHandler(e) {
  if (e.target.className === "emoji") {
    const selectedEmoji = document.querySelector(".selected_emoji");
    selectedEmoji.className = "emoji";
    e.target.className = "selected_emoji";
  }
}

function diaryParagrapthClickHandler(e) {
  if (e.target.className === "diray_paragraph") {
    const content = e.target.innerText;
    document.querySelector(
      ".diary_content"
    ).innerHTML = `<textarea class="diary_textarea" >${content}</textarea>`;
  }
}

document.addEventListener("click", emojiClickHandler);
document.addEventListener("click", diaryParagrapthClickHandler);
