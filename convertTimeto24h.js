function convertTo24HrsFormat(timeText) {
  var timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":"); //12,10am
  console.log(hours, mins);

  // 12 o clock is the special case to be handled both for AM and PM
  if (timeTextLower.endsWith("am")) {
    hours = hours == 12 ? "0" : hours; //0
  } else if (timeTextLower.endsWith("pm")) {
    hours = hours == 12 ? hours : String(+hours + 12); //4
  }
  console.log(hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0));

  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}

convertTo24HrsFormat("1:10PM");
convertTo24HrsFormat("4:10AM");
