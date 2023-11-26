class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node, idx) {
  if (idx === 0) {
    return node.next;
  }

  let currentIdx = 0;
  let currentHead = node;

  while (currentHead !== null) {
    if (currentIdx === idx - 1) {
      currentHead.next = currentHead.next?.next;
      break;
    }

    currentIdx++;
    currentHead = currentHead.next;
  }

  return node;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  var newHead = solution(node0, 1);

  console.log(newHead);
  // result is node0 -> node2 -> node3
}

test();
