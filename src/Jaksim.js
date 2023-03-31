import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
} from "../helper/JaksimApi.js";
import { hideModal, showModal } from "../helper/ModalControl.js";

/* 작심 Today 입력 */
const addjaksimTodayBtn = document.querySelector(".add_jaksim_today_btn");
const addFrequentjaksimBtn = document.querySelector(".frequent_add_button");
const modalCloseBtn = document.querySelector(".jaksim_today_modal_close_bth");
const backdrop = document.querySelector(".backdrop");
const modalTitle = document.querySelector(".jaksim_today_modal_title");
export const jaksimTodayData = [];

renderFrequentJaksimList(); // 페이지 오픈시 자주쓰는 작심 리스트 렌더링
renderJaksimTodayList(jaksimTodayData); // 오늘의 작심 리스트 렌더링

/** 모달 컨트롤 **/
addjaksimTodayBtn.addEventListener("click", () => {
  showModal();
  modalTitle.innerHTML = "<h3>오늘의 작심 추가하기</h3>";
}); // 오늘의 작심 추가 버튼을 누르면 모달이 열리면서 타이틀을 '오늘의 작심 추가하기'로 바꿔줌

addFrequentjaksimBtn.addEventListener("click", () => {
  showModal();
  modalTitle.innerHTML = "<h3>자주쓰는 작심 추가하기</h3>";
}); // 자주쓰는 작심 추가 버튼을 누르면 모달이 열리면서 타이틀을 '자주쓰는 작심 추가하기'로 바꿔줌

modalCloseBtn.addEventListener("click", hideModal); // 모달창 x버튼 눌러서 닫기
backdrop.addEventListener("click", hideModal); // 모달창 외부 백드롭 영역 눌러서 닫기

/** 생성된 오늘의 작심 리스트에 클릭이벤트를 만듬 **/
document.addEventListener("click", (e) => {
  if (e.target.className.includes("jaksim_today_li")) {
    // 클릭한 엘리먼트가 클래스에 "jaksim_today_li"를 포함하는 경우에만 이벤트 실행
    const selectedJaksimToday = jaksimTodayData.find((data) => {
      return data.id + "T" === e.target.id;
    }); // 오늘의 작심 데이터 객체배열에서 클릭한 오늘의 작심 데이터를 찾아 변수에 저장

    selectedJaksimToday.isDone = !selectedJaksimToday.isDone;
    // 클릭한 오늘의 작심 데이터의 키인 isDone의 값을 토글

    renderJaksimTodayList(jaksimTodayData);
    //오늘의 작심 리렌더링
  }
}); // 오늘의 작심 li 클릭시 done클래스를 토글하여 텍스트에 가로줄 생성

/** 생성된 자주쓰는 작심 리스트에 클릭이벤트를 만듬 **/
document.addEventListener("click", (e) => {
  if (e.target.className.includes("frequent_jaksim_li")) {
    // 클릭한 엘리먼트가 클래스에 "frequent_jaksim_li"를 포함하는 경우에만 이벤트 실행
    const jaksim = e.target.innerText;
    const fiture = e.target.classList[1];
    const id = e.target.id.slice(0, -1);
    const isDone = false;

    if (!jaksimTodayData.find((data) => data.jaksim === jaksim)) {
      jaksimTodayData.push({ id, jaksim, fiture, isDone });
      renderJaksimTodayList(jaksimTodayData);
    } // 오늘의 작심 객체 배열에 클릭한 자주쓰는 작심의 데이터가 없는 경우만 객체배열에 추가 후 오늘의 작심 리렌더링
  }
}); // 자주쓰는 작심 li 클릭시 오늘의 작심 리스트로 이동
