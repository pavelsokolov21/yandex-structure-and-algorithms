const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

const ACTIONS = {
  PUSH_FRONT: "push_front",
  PUSH_BACK: "push_back",
  POP_FRONT: "pop_front",
  POP_BACK: "pop_back",
};

class Deque {
  constructor(n) {
    this._data = new Array(n).fill(null);
    this._maxSize = n;
    this._size = 0;
    this._head = 0;
    this._tail = n - 1;
  }

  _getIndex(action) {
    switch (action) {
      case ACTIONS.PUSH_FRONT:
        return (this._head + this._maxSize + 1) % this._maxSize;
      case ACTIONS.PUSH_BACK:
        return (this._tail + this._maxSize - 1) % this._maxSize;
      case ACTIONS.POP_FRONT:
        return (this._head + this._maxSize - 1) % this._maxSize;
      case ACTIONS.POP_BACK:
        return (this._tail + this._maxSize + 1) % this._maxSize;
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  isFull() {
    return this._size === this._maxSize;
  }

  pushBack(item) {
    if (this.isFull()) {
      throw new RangeError("Deque is full");
    }

    this._data[this._tail] = item;
    this._tail = this._getIndex(ACTIONS.PUSH_BACK);
    this._size++;
  }

  pushFront(item) {
    if (this.isFull()) {
      throw new RangeError("Deque is full");
    }

    this._data[this._head] = item;
    this._head = this._getIndex(ACTIONS.PUSH_FRONT);
    this._size++;
  }

  popFront() {
    if (this.isEmpty()) {
      throw new RangeError("Deque is empty");
    }

    this._head = this._getIndex(ACTIONS.POP_FRONT);

    const value = this._data[this._head];

    this._data[this._head] = null;
    this._size--;

    return value;
  }

  popBack() {
    if (this.isEmpty()) {
      throw new RangeError("Deque is empty");
    }

    this._tail = this._getIndex(ACTIONS.POP_BACK);

    const value = this._data[this._tail];

    this._data[this._tail] = null;
    this._size--;

    return value;
  }
}

function solve() {
  const commandsCount = readInt();
  const dequeSize = readInt();
  const deque = new Deque(dequeSize);
  const commands = readCommands(commandsCount);

  for (let i = 0; i < commandsCount; i++) {
    const command = commands[i];
    let commandName = command;
    let value = null;

    if (command !== ACTIONS.POP_BACK && command !== ACTIONS.POP_FRONT) {
      const splittedCommand = command.split(" ");

      commandName = splittedCommand[0];
      value = splittedCommand[1];
    }

    try {
      switch (commandName) {
        case ACTIONS.PUSH_FRONT:
          deque.pushFront(Number(value));
          break;
        case ACTIONS.PUSH_BACK:
          deque.pushBack(Number(value));
          break;
        case ACTIONS.POP_FRONT:
          const popFrontValue = deque.popFront();

          console.log(popFrontValue);
          break;
        case ACTIONS.POP_BACK:
          const popBackValue = deque.popBack();

          console.log(popBackValue);
          break;
        default:
          throw new Error("Unknown command");
      }
    } catch {
      console.log("error");
    }
  }
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readCommands(commandsCount) {
  const commands = [];

  for (let i = 0; i < commandsCount; i++) {
    const command = _inputLines[_curLine];

    commands.push(command);

    _curLine++;
  }

  return commands;
}
