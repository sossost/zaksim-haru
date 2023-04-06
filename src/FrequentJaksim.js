import { deleteFrequentJaksim } from "./helper/FrequentJaksimApi.js";
import {
  renderFrequentJaksimList,
  renderJaksimTodayList,
} from "./helper/JaksimRender.js";
import {
  saveJaksimToday,
  getJaksimTodayList,
} from "./helper/JaksimTodayApi.js";

/** 자주쓰는 작심 li 클릭시 오늘의 작심으로 li 이동시키는 함수 **/
async function frequentJaksimClickHandler(e) {
  if (e.target.className.includes("frequent_jaksim_click_area")) {
    const jaksim = e.target.innerText;
    const feature = e.target.parentElement.classList[1];
    const date = new Date().toLocaleDateString();
    const isDone = false;

    const data = { jaksim, feature, date, isDone };

    const jaksimTodayList = await getJaksimTodayList();
    if (jaksimTodayList.find((data) => data.jaksim === jaksim)) {
      alert("이미 추가된 작심입니다.");
      return; // 클릭한 작심이 오늘의 작심에 있는 데이터랑 중복되는지 확인
    }
    await saveJaksimToday(data);

    renderJaksimTodayList();
    renderFrequentJaksimList();
  } // 오늘의 작심 객체 배열에 클릭한 자주쓰는 작심의 데이터가 없는 경우만 객체배열에 추가 후 오늘의 작심 리렌더링
}

async function frequentJaksimCrossClickHandler(e) {
  if (e.target.className === "delete_frequent_jaksim_btn") {
    const id = e.target.parentElement.id;
    const jaksim = e.target.parentElement.innerTex;

    if (confirm(`정말 ${jaksim}를 삭제하시겠습니까?`)) {
      deleteFrequentJaksim(id);
      renderFrequentJaksimList();
    } else {
      return;
    }
  }
}

document.addEventListener("click", frequentJaksimClickHandler);
document.addEventListener("click", frequentJaksimCrossClickHandler);
