// A Worker Pool manages multiple worker threads to process tasks concurrently while limiting the number of workers running at the same time. Implement a WorkerPool class that:
// 1. Accepts a maximum number of concurrent workers.
// 2. Provides a run (taskFunction) method to enqueue tasks.
// 3. Executes up to n tasks concurrently, where n is the worker limit.
// 4. Ensures tasks complete before starting new ones if the limit is reached.
// 5. Returns a promise that resolves with the task's result once completed.
// Example Inputs & Outputs

class WorkerPool {
  constructor(maxWorkers) {
    this.maxWorkers = maxWorkers;
    this.activeWorkers = 0;
    this.taskQueue = [];
  }

  run(taskFunction) {
    return new Promise((resolve, reject) => {
      const executeTask = async () => {
        try {
          this.activeWorkers++;
          const result = await taskFunction();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          if (this.taskQueue.length > 0) {
            const nextTask = this.taskQueue.shift();
            nextTask();
          }
        }
      };
      if (this.activeWorkers < this.maxWorkers) {
        executeTask();
      } else {
        this.taskQueue.push(executeTask);
      }
    });
  }
}

const pool = new WorkerPool(2); // Max 2 concurrent workers
async function task(id, delay) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`Task ${id} done`), delay)
  );
}

// Run tasks
pool.run(() => task(1, 1000)).then(console.log);
pool.run(() => task(2, 500)).then(console.log);
pool.run(() => task(3, 200)).then(console.log);
