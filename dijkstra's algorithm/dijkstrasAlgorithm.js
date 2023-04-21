const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  const costs = {};
  const visited = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];

      costs[node] = value || 1000000000;
    }
  });

  let node = findNodeLowestCost(costs, visited);

  while (node) {
    const cost = costs[node]; // 1) 1

    neighbors = graph[node]; // 1) graph[node] - c: {d: 5, e: 2}

    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    visited.push(node);

    node = findNodeLowestCost(costs, visited);
  }

  let endShortestCost = `${end}: ${costs[end]}`

  return endShortestCost;
}
function findNodeLowestCost(costs, visited) {
  let lowestCost = 1000000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];

    if (cost < lowestCost && !visited.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}

console.log(shortPath(graph, "a", "g"));
