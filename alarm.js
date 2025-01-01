const readline = require("readline");
const moment = require("moment");

class Alarm {
  constructor(time, day) {
    this.time = time; // format: "HH:mm"
    this.day = day; // format: "Monday", "Tuesday", etc.
    this.snoozeCount = 0;
  }

  checkAlarm(currentTime) {
    const [currentDay, currentHourMinute] = currentTime.split(" ");
    return this.day === currentDay && this.time === currentHourMinute;
  }

  snooze() {
    if (this.snoozeCount < 3) {
      this.snoozeCount++;
      let [hour, minute] = this.time.split(":").map(Number);
      minute += 5;
      if (minute >= 60) {
        minute -= 60;
        hour += 1;
        if (hour >= 24) hour = 0;
      }
      this.time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      console.log(`Alarm snoozed to ${this.time}`);
    } else {
      console.log("Maximum snooze limit reached.");
    }
  }
}

class AlarmClock {
  constructor() {
    this.alarms = [];
    this.currentAlarm = null;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      const currentTime = moment().format("dddd HH:mm");
      console.log(`Current time: ${currentTime}`);
      this.checkAlarms(currentTime);
    }, 60000); // Check every minute
  }

  checkAlarms(currentTime) {
    this.alarms.forEach((alarm) => {
      if (alarm.checkAlarm(currentTime)) {
        console.log(`Alarm ringing for ${alarm.time} on ${alarm.day}!`);
        this.currentAlarm = alarm;
        this.promptSnoozeOrDelete();
      }
    });
  }

  promptSnoozeOrDelete() {
    this.rl.question(
      "Enter 'snooze' to snooze or 'delete' to delete the alarm: ",
      (answer) => {
        if (answer === "snooze") {
          this.currentAlarm.snooze();
        } else if (answer === "delete") {
          this.deleteAlarm(this.currentAlarm);
        }
        this.currentAlarm = null;
      }
    );
  }

  createAlarm() {
    this.rl.question("Enter alarm time (HH:mm): ", (time) => {
      this.rl.question("Enter day of the week: ", (day) => {
        const newAlarm = new Alarm(time, day);
        this.alarms.push(newAlarm);
        console.log(`Alarm set for ${time} on ${day}`);
      });
    });
  }

  deleteAlarm(alarm) {
    const index = this.alarms.indexOf(alarm);
    if (index > -1) {
      this.alarms.splice(index, 1);
      console.log("Alarm deleted.");
    } else {
      console.log("Alarm not found.");
    }
  }

  start() {
    this.rl.question(
      "Enter 'set' to set an alarm or 'exit' to quit: ",
      (command) => {
        if (command === "set") {
          this.createAlarm();
          this.start();
        } else if (command === "exit") {
          this.rl.close();
        } else {
          console.log("Invalid command");
          this.start();
        }
      }
    );
  }
}

const alarmClock = new AlarmClock();
alarmClock.start();
