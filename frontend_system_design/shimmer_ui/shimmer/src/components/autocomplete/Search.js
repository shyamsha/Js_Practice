import React, { useEffect, useState } from "react";
import { debounce } from "../../utils/debounce";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const t = setTimeout(() => {
      fetchData();
    }, 200);
    return () => clearTimeout(t);
    // debounce(fetchData(), 5000);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const data = await fetch(
        `https://www.google.com/complete/search?client=firefox&q=${searchText}`
      );
      const results = await data.json();
      cache[searchText] = results[1];
      setSearchResults(results[1]);
    }
  };
  console.log(cache);
  return (
    <div className="m-10">
      <input
        className="border border-black p-2 w-96 shadow-lg"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul className="p-2 border border-black w-96 shadow-lg">
          {searchResults.map((item) => {
            return (
              <li className="hover:bg-gray-200 cursor-pointer" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
