import { getFrequentJaksim } from "./FrequentJaksimApi.js";
import { getJaksimTodayList } from "./JaksimTodayApi.js";

/**  자주쓰는 작심 리스트 생성 함수  **/
export const renderFrequentJaksimList = async () => {
  const frequentJaksimUl = document.querySelector(".frequent_jaksim_ul");

  const frequentJaksimData = await getFrequentJaksim();
  //fetch로 받아온 데이터를 frequentJaksimData에 담음

  const frequentJaksimList = [];

  frequentJaksimData.map((data) =>
    frequentJaksimList.push(
      // frequentJaksimList 빈배열에 받아온 데이터를 HTML 엘리먼트로 넣음
      `<li id="${data.id}" class="frequent_jaksim_li ${data.feature}">
          <div class="frequent_jaksim_click_area">
              <span>${data.jaksim}</span>
          </div>
          <div class="delete_frequent_jaksim_btn">
              <img src="../public/cross.png">
          </div>
       </li>`
    )
  );

  frequentJaksimUl.innerHTML = frequentJaksimList.join("");
  // 만들어진 HTML 엘리먼트를 frequentJaksim ul에 넣음

  return frequentJaksimList;
};

/**  오늘의 작심 리스트 생성 함수  **/
export const renderJaksimTodayList = async () => {
  const jaksimTodayUl = document.querySelector(".jaksim_today_ul");

  const jaksimTodayData = await getJaksimTodayList();

  const jaksimTodayList = [];

  jaksimTodayData.map((data) => {
    // 함수 인자로 받아온 오늘의작심 객체배열 데이터를 map함수를 통해
    jaksimTodayList.push(
      // jaksimTodayList라는 빈배열에 HTML 엘리먼트로 넣음
      `<li id="${data.id}" class="jaksim_today_li ${data.isDone ? "done" : ""}">
          <div class="jaksim_today_click_area">
             <div class="jaksim_today_checkbox ${data.feature}">
                ${data.isDone ? "ㅇ" : ""}
             </div>
             <span>${data.jaksim}</span>
          </div>
          <div class="delete_jaksim_today_btn">
             <img src="../public/cross.png">
          </div>
       </li>`
    );
  });

  jaksimTodayUl.innerHTML = jaksimTodayList.join("");
  // 만들어진 HTML 엘리먼트를 jaksimToday ul에 넣음
};
