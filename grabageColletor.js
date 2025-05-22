// You're given an object graph representing allocated objects in memory. Each object can reference other objects. The graph is represented as a JavaScript object where keys are object IDs, and values are arrays of IDs they reference.
// You're also given a list of roots - objects that are considered accessible.
// Your task is to simulate a garbage collector that removes any unreachable objects (not accessible from the root set) and returns the cleaned memory graph.
// • Input:
// graph: an object representing the memory (e.g., ‹ A:
// L'B'], B: l'C'], D: [1 7)
// roots: an array of root object IDs (e.g., ['A'])
// • Output:
// an object representing the cleaned graph containing only reachable objects.

// Input:
// graph = { A: L'B'], B: I'C'], C: [], D: [] }
// roots = ['A']
// Output:
// { A: ['B'], B: ['C'], C: [] }

function garbageCollector(graph, roots) {
  const visited = new Set();
  const stack = [...roots];

  while (stack.length) {
    const current = stack.pop();
    if (!visited.has(current)) {
      visited.add(current);
      if (graph[current]) {
        stack.push(...graph[current]);
      }
    }
  }

  const cleanedGraph = {};
  for (const key in graph) {
    if (visited.has(key)) {
      cleanedGraph[key] = graph[key].filter((ref) => visited.has(ref));
    }
  }

  return cleanedGraph;
}
// Example usage
const graph = { A: ["B"], B: ["C"], C: [], D: [] };
const roots = ["A"];
const cleanedGraph = garbageCollector(graph, roots);
console.log(cleanedGraph); // { A: ['B'], B: ['C'], C: [] }
// The cleaned graph contains only the reachable objects from the roots.
