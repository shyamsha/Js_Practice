class TaskRunner {
  constructor(concurrency) {
    this.concurrency = concurrency;
    this.runningTasks = 0;
    this.queue = [];
  }

  async push(task) {
    if (this.runningTasks < this.concurrency) {
      await this.execute(task);
    } else {
      this.queue.push(task);
      // console.log(this.queue);
    }
  }

  async execute(task) {
    try {
      this.runningTasks++;
      // console.log(this.runningTasks);
      await task();
    } finally {
      console.log(this.runningTasks);

      this.runningTasks--;
      console.log(this.runningTasks);
      console.log(this.queue);
      if (this.queue.length && this.runningTasks < this.concurrency) {
        const nextTask = this.queue.shift();
        await this.execute(nextTask);
      }
    }
  }
}

let ex = new TaskRunner(3);

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const t1 = async () => {
  console.log("t1 started");
  await delay(2000);
  console.log("t1 finished");
};
const t2 = async () => {
  console.log("t2 started");
  await delay(1000);
  console.log("t2 finished");
};

const t3 = async () => {
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
};

const t4 = async () => {
  console.log("t4 started");
  await delay(1000);
  console.log("t4 finished");
};

const t5 = async () => {
  console.log("t5 started");
  await delay(500);
  console.log("t5 finished");
};

ex.push(t1);
ex.push(t2);
ex.push(t3);
ex.push(t4);
ex.push(t5);

// output

// t1 started
// t2 started
// t3 started
// t2 finished
// t4 started
// t3 finished
// t5 started
// t1 finished
// t5 finished
// t4 finished
