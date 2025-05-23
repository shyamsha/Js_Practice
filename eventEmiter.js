// write event emitter class in javascript like nodejs
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => {
        listener(...args);
      });
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((l) => l !== listener);
    }
  }
  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }
  removeAllListeners(event) {
    if (this.events[event]) {
      delete this.events[event];
    }
  }
}

class Emitter {
  constructor() {
    this._subscriptions = new Map();
  }

  subscribe(eventName, listener) {
    if (!listener || typeof listener !== "function") {
      new TypeError("Listener should be a function");
    }
    if (!this._subscriptions.has(eventName)) {
      this._subscriptions.set(eventName, new Map());
    }
    const subscriptionId = Symbol(); // producing unique id
    const listenerSubscriptions = this._subscriptions.get(eventName);
    listenerSubscriptions.set(subscriptionId, listener);

    return {
      release: function () {
        if (!listenerSubscriptions.has(subscriptionId)) {
          throw new Error("Subscription is already released");
        }
        // release subscription here
        listenerSubscriptions.delete(subscriptionId);
      },
    };
  }
  emit(eventName, ...args) {
    const listenerSubscription = this._subscriptions.get(eventName);
    if (!listenerSubscription) {
      return;
    }
    listenerSubscription.forEach((callback) => callback(...args));
  }
}

const emitter = new Emitter();

let name = "";
const subscription = emitter.subscribe("modify", (userName) => {
  name = userName;
  console.log({ modifiedUserName: name });
});

emitter.emit("modify", "syam kumar");

subscription.release();

emitter.emit("modify", "syam kumar");
console.log({ afterRelease: name });

emitter.emit("modify", "nmae"); // if emit its not effect name

subscription.release(); // if again release throw error
