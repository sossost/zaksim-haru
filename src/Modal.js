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

const waterClickHandler = () => {
  waterFitureBtn.classList.add("water_clicked");
  sunFitureBtn.classList.remove("sun_clicked");
  pillFitureBtn.classList.remove("pill_clicked");
  fitureInputEl.setAttribute("value", "water");
};

const sunClickHandler = () => {
  waterFitureBtn.classList.remove("water_clicked");
  sunFitureBtn.classList.add("sun_clicked");
  pillFitureBtn.classList.remove("pill_clicked");
  fitureInputEl.setAttribute("value", "sun");
};

const pillClickHandler = () => {
  waterFitureBtn.classList.remove("water_clicked");
  sunFitureBtn.classList.remove("sun_clicked");
  pillFitureBtn.classList.add("pill_clicked");
  fitureInputEl.setAttribute("value", "pill");
};
// 선택한 특성의 value는 fitureInputEl의 value에 저장

waterFitureBtn.addEventListener("click", waterClickHandler);
sunFitureBtn.addEventListener("click", sunClickHandler);
pillFitureBtn.addEventListener("click", pillClickHandler);
///////////////////////////////////////////////////////

/* 모달창 제출 버튼 */
const modalSubmitBtn = document.querySelector(".jaksim_today_modal_submit_btn");
const modalSubmitHandler = (e) => {
  e.preventDefault();
  const zaksimInputValue = document.querySelector(
    ".jaksim_today_modal_input"
  ).value;
  const zaksimFitureValue = fitureInputEl.getAttribute("value");

  console.log(zaksimInputValue, zaksimFitureValue);
};

modalSubmitBtn.addEventListener("click", modalSubmitHandler);

///////////////////////////////
