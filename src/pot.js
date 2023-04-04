import { getJaksimTodayList } from "./helper/JaksimTodayApi.js";

export const renderPot = async () => {
  const waterProcessivity = document.querySelector(".water_processivity");
  const sunProcessivity = document.querySelector(".sun_processivity");
  const pillProcessivity = document.querySelector(".pill_processivity");

  const sunGoalNumber = 3;
  const waterGoalNumber = 3;
  const pillGoalNumber = 3;

  const jaksimTodayList = await getJaksimTodayList();
  const completedJaksimList = jaksimTodayList.filter(
    (jaksim) => jaksim.isDone === true
  );

  const completedSunNumber = completedJaksimList.filter(
    (jaksim) => jaksim.fiture === "sun"
  ).length;
  const completedWaterNumber = completedJaksimList.filter(
    (jaksim) => jaksim.fiture === "water"
  ).length;
  const completedPillNumber = completedJaksimList.filter(
    (jaksim) => jaksim.fiture === "pill"
  ).length;

  waterProcessivity.innerText =
    Math.floor((completedWaterNumber / waterGoalNumber) * 100) + "%";

  sunProcessivity.innerText =
    Math.floor((completedSunNumber / sunGoalNumber) * 100) + "%";

  pillProcessivity.innerText =
    Math.floor((completedPillNumber / pillGoalNumber) * 100) + "%";
};
