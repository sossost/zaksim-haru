import { getJaksimTodayList } from "./helper/JaksimTodayApi.js";

export const renderPot = async () => {
  const potContentEl = document.querySelector(".pot_content");
  const waterProcessivity = document.querySelector(".water_processivity");
  const sunProcessivity = document.querySelector(".sun_processivity");
  const pillProcessivity = document.querySelector(".pill_processivity");

  // 각 특징별 작심 목표 달성치
  let sunGoalNumber = 3;
  let waterGoalNumber = 3;
  let pillGoalNumber = 3;

  // 각 특징별 작심 달성률 (초기값 0%)
  let completedWaterRate = 0;
  let completedSunRate = 0;
  let completedPillRate = 0;

  // 완료된 작심들만 가져와서 completedJaksimList에 저장
  const jaksimTodayList = await getJaksimTodayList();
  const completedJaksimList = jaksimTodayList.filter(
    (jaksim) => jaksim.isDone === true
  );

  // 완료된 작심들을 특징별로 각각 나눠서 갯수 저장
  const completedJaksimByFeature = (feature) =>
    completedJaksimList.filter((jaksim) => jaksim.feature === feature);
  const completedWaterNumber = completedJaksimByFeature("water").length;
  const completedSunNumber = completedJaksimByFeature("sun").length;
  const completedPillNumber = completedJaksimByFeature("pill").length;

  // 각 특징별 작심 달성률 계산식
  if (completedWaterNumber > waterGoalNumber) {
    completedWaterRate = 100;
  } else {
    completedWaterRate = Math.floor(
      (completedWaterNumber / waterGoalNumber) * 100
    );
  }

  if (completedSunNumber > sunGoalNumber) {
    completedSunRate = 100;
  } else {
    completedSunRate = Math.floor((completedSunNumber / sunGoalNumber) * 100);
  }

  if (completedPillNumber > pillGoalNumber) {
    completedPillRate = 100;
  } else {
    completedPillRate = Math.floor(
      (completedPillNumber / pillGoalNumber) * 100
    );
  }

  const completedAllJaksimRate =
    completedWaterRate + completedSunRate + completedPillRate;

  function toggleClass(number) {
    for (let i = 0; i < 6; i++) {
      potContentEl.children[i].classList.add("hide");
    }
    potContentEl.children[number].classList.remove("hide");
    potContentEl.children[number].classList.add("show");
  }

  if (completedAllJaksimRate < 60) {
    toggleClass(0);
  } else if (completedAllJaksimRate < 120) {
    toggleClass(1);
  } else if (completedAllJaksimRate < 180) {
    toggleClass(2);
  } else if (completedAllJaksimRate < 240) {
    toggleClass(3);
  } else if (completedAllJaksimRate < 300) {
    toggleClass(4);
  } else if (completedAllJaksimRate === 300) {
    toggleClass(5);
  }

  // 각 특징별 작심 달성률 렌더링
  waterProcessivity.innerText = `${completedWaterRate}%`;
  sunProcessivity.innerText = `${completedSunRate}%`;
  pillProcessivity.innerText = `${completedPillRate}%`;
};
