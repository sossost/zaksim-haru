// 작심 투데이 리스트를 DB에 GET하는 함수
export const getJaksimTodayList = async () => {
  const response = await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/jaksim_today.json"
  );

  const data = await response.json();

  const jaksimTodayList = [];

  for (const key in data) {
    jaksimTodayList.push({
      id: key,
      jaksim: data[key].jaksim,
      feature: data[key].feature,
      date: data[key].date,
      isDone: data[key].isDone,
    });
  } // fetch로 받아온 data를 빈배열에 객체로 만들어서 넣어줘야함

  return jaksimTodayList.filter(
    (data) => data.date === new Date().toLocaleDateString()
  ); // 입력한 날짜가 오늘인 작심들만 필터링해서 리턴함 (오늘의 작심 이므로)
};

// 작심 투데이를 DB에 POST하는 함수, 인자로 DB에 넣을 data 객체가 필요함
export const saveJaksimToday = async (data) => {
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

// 작심 투데이를 DB에 PATCH하는 함수, id(key값), isDone(완료여부 : boolean) 2개의 인자가 필요
export const updateJaksimToday = async (id, isDone) => {
  await fetch(
    `https://zaksim-haru-default-rtdb.firebaseio.com/jaksim_today/${id}.json`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isDone: isDone }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => console.log("Error:", error));
};

// 작심 투데이를 DB에서 DELETE 하는 함수, 인자로 DB에서 삭제할 id(key값)이 필요
export const deleteJaksimToday = async (id) => {
  await fetch(
    `https://zaksim-haru-default-rtdb.firebaseio.com/jaksim_today/${id}.json`,
    {
      method: "Delete",
    }
  )
    .then(() => {
      console.log("Delete Success");
    })
    .catch((error) => console.log("Error:", error));
};
