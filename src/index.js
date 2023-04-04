import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
} from "./helper/JaksimRender.js";
import { hideModal, showModal } from "./helper/ModalControl.js";
import { renderPot } from "./pot.js";

const addjaksimTodayBtn = document.querySelector(".add_jaksim_today_btn");
const modalCloseBtn = document.querySelector(".jaksim_today_modal_close_bth");
const backdrop = document.querySelector(".backdrop");

// const jaksimTodayUl = document.querySelector(".jaksim_today_ul");
// const frequentJaksimUl = document.querySelector(".frequent_jaksim_ul");
// const loadingEl = `<div class="loading">Loading...</div>`;

// jaksimTodayUl.innerHTML = loadingEl;
// frequentJaksimUl.innerHTML = loadingEl;

renderFrequentJaksimList(); // 페이지 오픈시 자주쓰는 작심 리스트 렌더링
renderJaksimTodayList(); // 오늘의 작심 리스트 렌더링
renderPot();

/** 모달 컨트롤 **/
addjaksimTodayBtn.addEventListener("click", () => {
  showModal();
});
modalCloseBtn.addEventListener("click", hideModal); // 모달창 x버튼 눌러서 닫기
backdrop.addEventListener("click", hideModal); // 모달창 외부 백드롭 영역 눌러서 닫기
