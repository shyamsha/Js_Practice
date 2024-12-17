function timeConversion1(s) {
  var timeTextLower = s.toLowerCase();
  let [hours, mins, sec] = timeTextLower.split(":"); //12 10 52am

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am")) {
    hours = hours == 12 ? "0" : hours;
  } else if (timeTextLower.endsWith("pm")) {
    hours = hours == 12 ? hours : String(+hours + 12);
  }
  console.log();

  return (
    hours.padStart(2, 0) +
    ":" +
    mins.padStart(2, 0) +
    ":" +
    sec.slice(0, -2).padStart(2, 0)
  );
}

console.log(timeConversion1("07:05:45 PM"));
console.log(timeConversion1("12:05:00 AM"));
console.log(timeConversion1("07:05:45 AM"));

const convert = (t) => {
  const [time, modifier] = t.split(" ");
  let [hours, min, sec] = time.split(":");

  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${min}:${sec}`;
};

// console.log(convert("01:02:00 PM"));
// console.log(convert("09:02:58 AM"));
// console.log(convert("00:02:00 PM"));
