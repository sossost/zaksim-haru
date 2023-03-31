const getFrequentJaksimList = async () => {
  const response = await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/jaksim_today.json"
  );

  const data = await response.json();

  const jaksimTodayList = [];

  for (const key in data) {
    jaksimTodayList.push({
      id: data[key].id,
      jaksim: data[key].jaksim,
      fiture: data[key].fiture,
    });
  }

  return jaksimTodayList;
};

export const saveFrequentJaksimList = async (data) => {
  await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/jaksim_today.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => console.log("Error:", error));
};

/**  자주쓰는 작심 리스트 생성 함수  **/
export const renderFrequentJaksimList = async () => {
  const frequentJaksimData = await getFrequentJaksimList();
  //fetch로 받아온 데이터를 frequentJaksimData에 담음

  const frequentJaksimList = [];

  frequentJaksimData.map((data) =>
    frequentJaksimList.push(
      // frequentJaksimList 빈배열에 받아온 데이터를 HTML 엘리먼트로 넣음
      `<li id="${data.id}F" class="frequent_jaksim_li ${data.fiture}">${data.jaksim}</li>`
    )
  );

  const frequentJaksimUl = document.querySelector(".frequent_jaksim_ul");
  frequentJaksimUl.innerHTML = frequentJaksimList.join("");
  // 만들어진 HTML 엘리먼트를 frequentJaksim ul에 넣음
};

/**  오늘의 작심 리스트 생성 함수  **/
export const renderJaksimTodayList = async (jaksimTodayData) => {
  const jaksimTodayList = [];

  jaksimTodayData.map((data) => {
    // 함수 인자로 받아온 오늘의작심 객체배열 데이터를 map함수를 통해
    jaksimTodayList.push(
      // jaksimTodayList라는 빈배열에 HTML 엘리먼트로 넣음
      `<li id="${data.id}T" class="jaksim_today_li ${
        data.isDone ? "done" : ""
      }"><div class="jaksim_today_checkbox ${data.fiture}">${
        data.isDone ? "ㅇ" : ""
      }</div>${data.jaksim}</li>`
    );
  });

  const jaksimTodayUl = document.querySelector(".jaksim_today_ul");
  jaksimTodayUl.innerHTML = jaksimTodayList.join("");
  // 만들어진 HTML 엘리먼트를 jaksimToday ul에 넣음
};
