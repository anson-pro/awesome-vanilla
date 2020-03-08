class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(eventName, cb) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(cb);
  }

  emit(eventName, ...args) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].forEach(fn => {
      fn.call(null, ...args);
    });
  }

  once(eventName, cb) {
    const fn = (...args) => {
      cb.call(null, ...args);
      this.off(eventName, fn);
    };
    this.on(eventName, fn);
  }

  off(eventName, cb) {
    const cbs = this.listeners[eventName] || [];
    const idx = cbs.indexOf(cb);
    if (idx >= 0) {
      this.listeners[eventName].splice(idx, 1);
    }
  }

  getAllListeners(eventName) {
    return this.listeners[eventName] || [];
  }
}

export default EventBus;
