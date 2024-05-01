import { getSuggestion, debounce } from "./utils.js";

const inputBox = document.getElementById("search-input");
const suggestionBox = document.getElementById("suggestions-Wrapper");

const resetState = () => {
  suggestionBox.classList.remove("suggestions-visible");
};

const renderDropdownItems = (list = []) => {
  let suggestionFragment = document.createDocumentFragment();

  list.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.classList.add("dropdown-item");
    suggestionFragment.appendChild(el);
  });
  suggestionBox.innerHTML = "";
  suggestionBox.appendChild(suggestionFragment);
};

const handleSearch = async (keyword) => {
  const result = await getSuggestion(keyword);
  console.log(result);
  if (result.length) {
    suggestionBox.classList.add("suggestions-visible");
    renderDropdownItems(result);
  }
};

const handleInputChange = (e) => {
  const value = e.target.value;

  if (value) {
    handleSearch(value);
  } else {
    resetState();
  }
};

const handleSelect = (e) => {
  const key = e.target.innerText; //! TODO: key is the value of the selected item here we can use as e.target.dataset so dataset object has key
  if (key) {
    inputBox.value = key;
    resetState();
  }
};

(() => {
  inputBox.addEventListener("input", debounce(handleInputChange, 500));
  suggestionBox.addEventListener("click", handleSelect);
})();
