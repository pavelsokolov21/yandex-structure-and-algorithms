class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node, elem) {
  let head = node;
  let idx = 0;

  while (head !== null && head.value !== elem) {
    idx++;
    head = head.next;
  }

  if (head === null) {
    return -1;
  }

  return idx;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  var idx = solution(node0, "node2");

  console.log(idx);
  // result is idx === 2
}

test();
