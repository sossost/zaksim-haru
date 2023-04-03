import { saveFrequentJaksim } from "./helper/FrequentJaksimApi.js";
import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
} from "./helper/JaksimRender.js";
import { saveJaksimToday } from "./helper/JaksimTodayApi.js";
import { hideModal } from "./helper/ModalControl.js";

const waterFitureBtn = document.querySelector("#water");
const sunFitureBtn = document.querySelector("#sun");
const pillFitureBtn = document.querySelector("#pill");
const fitureInputEl = document.querySelector(".jaksim_today_modal_color_check");
const modalSubmitBtn = document.querySelector(".jaksim_today_modal_submit_btn");

/* 라디오버튼 선택 핸들러 함수 */
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

// 작심 모달 제출 핸들러 함수
const modalSubmitHandler = async (e) => {
  e.preventDefault();

  // 작심 데이터 객체에 필요한 value 값들 받아옴(작심내용, 작심특징, 작성날짜)
  const jaksimInputValue = document.querySelector(
    ".jaksim_today_modal_input"
  ).value;
  const jaksimFitureValue = fitureInputEl.getAttribute("value");
  const jaksimDate = new Date().toLocaleDateString();
  const frequentJaksimIsChecked = document.getElementById(
    "frequent_jaksim_add_check"
  ).checked; // 자주쓰는 작심에도 추가할건지 체크 여부

  // 작심 input 유효성 검사 (빈칸 제출)
  if (jaksimInputValue === "") {
    alert("작심 내용을 입력해주세요.");
    return;
  }

  /* 위에서 받아온 value 값들 데이터 객체에 저장 (완료여부인 isDone 추가)
   오늘의 작심과 자주쓰는 작심의 필요한 데이터가 달라서 따로저장 */
  const jaksimTodayData = {
    jaksim: jaksimInputValue,
    fiture: jaksimFitureValue,
    date: jaksimDate,
    isDone: false,
  };

  const frequentJaksimData = {
    jaksim: jaksimInputValue,
    fiture: jaksimFitureValue,
  };

  // 체크 여부에따라 양쪽 or 한쪽에 fetch
  if (frequentJaksimIsChecked) {
    await saveJaksimToday(jaksimTodayData); // 오늘의작심을 fetch하는 함수에 데이터객체를 인자로 전달
    await saveFrequentJaksim(frequentJaksimData); // 자주쓰는작심을 fetch하는 함수에 데이터객체를 인자로 전달

    await renderJaksimTodayList();
    await renderFrequentJaksimList();
    // 이후 오늘의 작심, 자주쓰는 작심 리스트 리렌더링
  } else {
    await saveJaksimToday(jaksimTodayData);
    await renderJaksimTodayList();
  }
  document.querySelector(".jaksim_today_modal_input").value = null; // fetch완료 후 input창 비우기

  hideModal();
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
modalSubmitBtn.addEventListener("click", modalSubmitHandler);
