// 자주쓰는 작심 리스트를 DB에 GET하는 함수
export const getFrequentJaksim = async () => {
  const response = await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/frequent_jaksim.json"
  );

  const data = await response.json();

  const frequentJaksimList = [];

  for (const key in data) {
    frequentJaksimList.push({
      id: key,
      jaksim: data[key].jaksim,
      fiture: data[key].fiture,
    });
  } // fetch로 받아온 data를 빈배열에 객체로 만들어서 넣어줘야함

  return frequentJaksimList;
};

// 자주쓰는 작심을 DB에 POST하는 함수, 인자로 DB에 넣을 data 객체가 필요함
export const saveFrequentJaksim = async (data) => {
  await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/frequent_jaksim.json",
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

// 작심 투데이를 DB에서 DELETE 하는 함수, 인자로 DB에서 삭제할 id(key값)이 필요
export const deleteFrequentJaksim = async (id) => {
  await fetch(
    `https://zaksim-haru-default-rtdb.firebaseio.com/frequent_jaksim/${id}.json`,
    {
      method: "DELETE",
    }
  )
    .then(() => {
      console.log("Delete Success");
    })
    .catch((error) => console.log("Error:", error));
};
