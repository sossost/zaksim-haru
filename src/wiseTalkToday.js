var texts = [
  "계획하지 않는 것은 실패를 계획하는 것과 마찬가지다.",
  "성공은 영원하지 않고, 실패는 치명적이지 않다.",
  "성공이란 넘어지는 횟수보다 한 번 더 일어서는 것이다.",
  "할 수 있다고 믿는 사람은 결국 그렇게 된다.",
  "가장 중요한 사실은 당신이 할 수 있다는 것을 아는 것이다.",
];

var currentIndex = 0;

function changeText() {
  var textElement = document.getElementById("text");
  textElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 3000);
