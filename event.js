const Events = require("events");
// const emitter = new Events.EventEmitter();

// emitter.on("evtClick", (msg) => {
//   console.log(msg);
// });

// emitter.emit("evtClick", "Hello World!!!");

class Person extends Events {
  constructor(name) {
    super();
    this.name = name;
  }
  teach(subject) {
    console.log(`${this.name} teaches ${subject}`);
  }
}

const XXX = new Person("XXX");
const YYY = new Person("YYY");
const ZZZ = new Person("ZZZ");
const people = [XXX, YYY, ZZZ];

people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(`${person.name} says ${msg}`);
  });
});

XXX.emit("speak", "Hi");
YYY.emit("speak", "Hello");
ZZZ.emit("speak", "How are you?");
