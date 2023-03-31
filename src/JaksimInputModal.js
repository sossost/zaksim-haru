import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
  saveFrequentJaksimList,
} from "../helper/JaksimApi.js";
import { hideModal } from "../helper/ModalControl.js";
import { jaksimTodayData } from "./Jaksim.js";

/* 라디오버튼 선택 기능 */
const waterFitureBtn = document.querySelector("#water");
const sunFitureBtn = document.querySelector("#sun");
const pillFitureBtn = document.querySelector("#pill");
const fitureInputEl = document.querySelector(".jaksim_today_modal_color_check");

const fitureClickHandler = (fiture) => {
  waterFitureBtn.classList.remove("clicked");
  sunFitureBtn.classList.remove("clicked");
  pillFitureBtn.classList.remove("clicked");
  // 각 버튼들 clicked css 초기화

  if (fiture === "water") {
    waterFitureBtn.classList.add("clicked");
  } else if (fiture === "sun") {
    sunFitureBtn.classList.add("clicked");
  } else if (fiture === "pill") {
    pillFitureBtn.classList.add("clicked");
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

/**  모달 인풋 제출 함수  **/
const modalSubmitHandler = async (e) => {
  e.preventDefault();

  const modalTitle = document.querySelector(
    ".jaksim_today_modal_title"
  ).innerText; // 모달의 타이틀에따라 다르게 submit하기위해 타이틀 변수에 저장

  const id = Math.random() * 10000000000000000;
  // id값을 랜덤숫자로 생성해서 변수에 저장

  const jaksimInputValue = document.querySelector(
    ".jaksim_today_modal_input"
  ).value;
  // 작심 input으로 받은 value 값 변수에 저장

  const jaksimFitureValue = fitureInputEl.getAttribute("value");
  // 체크한 작심 특징 value 값 변수에 저장

  if (jaksimInputValue === "") {
    alert("작심을 입력해주세요.");
    return;
  } // 작심 input 유효성 검사 (빈칸 제출)

  const data = { id, jaksim: jaksimInputValue, fiture: jaksimFitureValue };
  // 모달에서 얻을수 있는 데이터 객체

  /////////////////////////////                         ////////////////////////////////////////
  if (modalTitle === "오늘의 작심 추가하기") {
    jaksimTodayData.push(data);
    await renderJaksimTodayList(jaksimTodayData);
    // 모달의 제목이 오늘의 작심 추가하기면 jaksimTodayData 객체 배열에 추가하고 오늘의 작심 리스트 리렌더링
  } else if (modalTitle === "자주쓰는 작심 추가하기") {
    await saveFrequentJaksimList(data);
    await renderFrequentJaksimList();
  } // 모달의 제목이 자주쓰는 작심 추가하기면 자주쓰는 작심을 DB에 fetch하는 헬퍼함수에 데이터 전달 및 리스트 리렌더링
  document.querySelector(".jaksim_today_modal_input").value = null;
  //////////////////////////////////////////////////////////////////////////////////////////////
  hideModal();
};

const modalSubmitBtn = document.querySelector(".jaksim_today_modal_submit_btn");
modalSubmitBtn.addEventListener("click", modalSubmitHandler);
