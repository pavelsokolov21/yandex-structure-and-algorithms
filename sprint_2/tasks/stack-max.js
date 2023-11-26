function doCommand(stack, command) {
  const [name, value] = command.split(" ");
  const logs = [];

  switch (name) {
    case "push": {
      stack.push(Number(value));
      break;
    }
    case "pop": {
      const res = stack.pop();

      if (res === "error") {
        console.log(`${res}`);
      }

      break;
    }
    case "get_max": {
      console.log(`${stack.getMax()}`);
    }
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      return "error";
    }

    return this.stack.pop();
  }

  getMax() {
    if (this.stack.length === 0) {
      return "None";
    }

    return Math.max(...this.stack);
  }
}

function stackMax(_commandsCount, commands) {
  const stack = new Stack();

  commands.forEach((command) => {
    doCommand(stack, command);
  });
}
