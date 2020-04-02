class Scheduler {
  constructor() {
    this.tasks = [];
    this.runningTasks = [];
  }

  add(promiseCreator) {
    return new Promise(resolve => {
      promiseCreator.resolve = resolve;

      if (this.runningTasks.length < 2) {
        this.run(promiseCreator);
      } else {
        this.tasks.push(promiseCreator);
      }
    });
  }

  run(promiseCreator) {
    this.runningTasks.push(promiseCreator);
    promiseCreator().then(() => {
      promiseCreator.resolve();
      this.removeTasks(promiseCreator);
      if (this.tasks.length > 0) {
        this.run(this.tasks.shift());
      }
    });
  }

  removeTasks(promiseCreator) {
    const idx = this.runningTasks.indexOf(promiseCreator);
    if (idx >= 0) {
      this.runningTasks.splice(idx, 1);
    }
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
});

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => {
    console.log(order);
  });
};

addTask(400, 4);
addTask(200, 2);
addTask(300, 3);
addTask(100, 1);
