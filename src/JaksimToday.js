import { renderJaksimTodayList } from "./helper/JaksimRender.js";
import {
  updateJaksimToday,
  deleteJaksimToday,
} from "./helper/JaksimTodayApi.js";
import { renderPot } from "./pot.js";

/** 오늘의 작심 li 클릭시 done클래스를 토글하여 체크 표시, 텍스트에 가로줄 생성 하는 함수**/
async function jaksimTodayClickHandler(e) {
  if (e.target.className.includes("jaksim_today_click_area")) {
    const selectedJaksimTodayId = e.target.parentElement.id;
    let isDone;

    if (e.target.parentElement.classList[1] === "done") {
      isDone = false; // jaksim_today_li 가 두번째 클래스로 done 가지고 있으면 클릭시 체크해제 되야함
    } else if (e.target.parentElement.classList[1] === undefined) {
      isDone = true; // jaksim_today_li 가 두번째 클래스가 없으면 클릭시 체크가 되야함
    }

    await updateJaksimToday(selectedJaksimTodayId, isDone); // 선택한 li의 id와 done 데이터를 전달

    renderJaksimTodayList();
    renderPot();
  }
}

async function jaksimTodayCrossClickHandler(e) {
  if (e.target.className === "delete_jaksim_today_btn") {
    const selectedJaksimTodayId = e.target.parentElement.id;
    if (
      confirm(`정말 ${e.target.parentElement.innerText}를 삭제하시겠습니까?`)
    ) {
      await deleteJaksimToday(selectedJaksimTodayId);
      renderJaksimTodayList();
      renderPot();
    } else {
      return;
    }
  }
}

document.addEventListener("click", jaksimTodayClickHandler);
document.addEventListener("click", jaksimTodayCrossClickHandler);
