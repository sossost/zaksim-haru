import { Modal } from "./ModalControl.js";

/* 작심 Today 입력 */
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
//////////////////////
