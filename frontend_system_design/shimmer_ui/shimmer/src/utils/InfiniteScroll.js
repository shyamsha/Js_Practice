export const handleScroll = (fetchData) => {
  //scrollY - how much I have scrolled
  // innerHeight - heigh of the window(visible section)
  // document.body.scrollHeight - total height of the web page
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    fetchData();
  }
};
