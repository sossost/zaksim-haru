/* 모달창 컨트롤 클래스 */
class Modal {
  constructor() {
    this.modalEl = document.querySelector(".jaksim_today_modal");
    this.backdropEl = document.querySelector(".backdrop");
  }

  show() {
    this.modalEl.style.display = "flex";
    this.backdropEl.style.display = "flex";
  }

  hide() {
    this.modalEl.style.display = "none";
    this.backdropEl.style.display = "none";
  }
}
///////////////////////////////

/* 모달창 띄우는 기능 */
const addZaksimTodayBtn = document.querySelector(".btn");
const backdrop = document.querySelector(".backdrop");
const modalCloseBtn = document.querySelector(".jaksim_today_modal_close_bth");

const modal = new Modal();

// 모달창 띄울 버튼
addZaksimTodayBtn.addEventListener("click", () => {
  modal.show();
});

// 모달창 x버튼 눌러서 닫기
modalCloseBtn.addEventListener("click", () => {
  modal.hide();
});

// 모달창 외부 백드롭 영역 눌러서 닫기
backdrop.addEventListener("click", () => {
  modal.hide();
});
//////////////////////////////

/* 라디오버튼 선택 기능 */
const waterFitureBtn = document.querySelector("#water");
const sunFitureBtn = document.querySelector("#sun");
const pillFitureBtn = document.querySelector("#pill");
const fitureInputEl = document.querySelector(".jaksim_today_modal_color_check");

const fitureClickHandler = (fiture) => {
  waterFitureBtn.classList.remove("water_clicked");
  sunFitureBtn.classList.remove("sun_clicked");
  pillFitureBtn.classList.remove("pill_clicked");
  // 각 버튼들 clicked css 초기화

  if (fiture === "water") {
    waterFitureBtn.classList.add("water_clicked");
  } else if (fiture === "sun") {
    sunFitureBtn.classList.add("sun_clicked");
  } else if (fiture === "pill") {
    pillFitureBtn.classList.add("pill_clicked");
  }
  // 매개변수로 받은 특징 clicked css 활성화

  fitureInputEl.setAttribute("value", fiture);
  // 클릭한 특징 부모 div value에 저장
};

waterFitureBtn.addEventListener("click", () => {
  fitureClickHandler("water");
});
sunFitureBtn.addEventListener("click", () => {
  fitureClickHandler("sun");
});
pillFitureBtn.addEventListener("click", () => {
  fitureClickHandler("pill");
});
///////////////////////////////////////////////////////

/* 모달창 제출 버튼 */
const modalSubmitBtn = document.querySelector(".jaksim_today_modal_submit_btn");
const modalSubmitHandler = (e) => {
  e.preventDefault();

  const zaksimInputValue = document.querySelector(
    ".jaksim_today_modal_input"
  ).value;
  // 작심 input으로 받은 value 값

  const zaksimFitureValue = fitureInputEl.getAttribute("value");
  // 체크한 작심 특징 value 값

  console.log(zaksimInputValue, zaksimFitureValue);

  if (zaksimInputValue === "") {
    alert("작심을 입력해주세요.");
    return;
  }
  // 작심 input 유효성 검사 (빈칸)
};

modalSubmitBtn.addEventListener("click", modalSubmitHandler);

///////////////////////////////
