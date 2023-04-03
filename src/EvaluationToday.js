function emojiClickHandler(e) {
  if (e.target.className === "emoji") {
    const selectedEmoji = document.querySelector(".selected_emoji");
    selectedEmoji.className = "emoji";
    e.target.className = "selected_emoji";
  }
}

document.addEventListener("click", emojiClickHandler);
