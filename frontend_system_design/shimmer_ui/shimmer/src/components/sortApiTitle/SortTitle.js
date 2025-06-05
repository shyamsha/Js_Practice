import { useEffect, useState } from "react";

export default function SortTitle() {
  const [data, setData] = useState([]);

  const getData = async function () {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await fetchData.json();
    let r = result.slice(90);
    setData(r);
  };

  const sortDataHandle = (data) => {
    let sortData = data.sort((a, b) => a.title.localeCompare(b.title));
    setData([...sortData]);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <button
        className="bg-blue-500 hover:bg-blue-700
        text-white font-bold py-2 px-4 rounded m-4 
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => sortDataHandle(data)}
      >
        Sort
      </button>
      <div>
        {data.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
