const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [{ v: 11 }],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [{ v: 1 }],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [{ v: 10 }, { v: 15 }],
  },
];

function recursiveTree(tree) {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if (!node.c) return node.v;

    sum += recursiveTree(node.c);
  });

  return sum;
}

function iterationTree(tree) {
  if (!tree.length) return 0;

  let sum = 0
  const stack = [];

  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    let node = stack.pop();

    sum += node.v;

    if (node.c) {
      node.c.forEach((child) => stack.push(child));
    }
  }

  return sum;
}

console.log(iterationTree(tree));
