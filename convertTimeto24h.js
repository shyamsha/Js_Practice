function convertTo24HrsFormat(timeText) {
  var timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":"); //12,10am

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am")) {
    hours = hours == 12 ? "0" : hours; //0
  } else if (timeTextLower.endsWith("pm")) {
    hours = hours == 12 ? hours : String(+hours + 12); //4
  }
  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}

convertTo24HrsFormat("1:10PM");
convertTo24HrsFormat("4:10AM");

function timeConversion1(s) {
  var timeTextLower = s.toLowerCase();
  let [hours, mins, sec] = timeTextLower.split(":"); //12,10am

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

console.log(timeConversion1("07:05:45PM"));
