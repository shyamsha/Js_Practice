import { useEffect, useState } from "react";

export default function SortTitle() {
  const [dataf, setDataf] = useState([]);
  const [asc, setAsc] = useState(false);

  const getData = async function () {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await fetchData.json();
    let r = result.slice(90);
    setDataf(r);
  };

  const sortDataHandle = () => {
    let sortData = dataf.sort(function (a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      if (a.title == b.title) return 0;
    });
    console.log(sortData);
    setDataf(sortData);
  };
  useEffect(() => {
    getData();
  }, [dataf]);
  console.log(dataf, "data");

  return (
    <div className="App">
      <button
        className="bg-blue-500 hover:bg-blue-700
        text-white font-bold py-2 px-4 rounded m-4 
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={sortDataHandle}
      >
        Sort
      </button>
      <div>
        {dataf &&
          dataf.map((item) => {
            return (
              <>
                <ul key={item.title}>{item.title}</ul>
              </>
            );
          })}
      </div>
    </div>
  );
}
