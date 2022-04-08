/*
seq 1 | xargs -L1 time node -e 'require("./test")(require(process.argv[1]),process.argv[2])'
*/

// vertices
const [A, B, C, D, E, F] = Array.from("ABCDEF").map(v => [v]);
const vs = new Set([A, B, C, D, E, F]);

// edges
const xs = [
  [A,B], [A,C], [A,D],
  [B,A], [B,E], [B,F],
  [C,A], [C,E], 
  [D,A], [D,E], 
  [E,B], [E,C], [E,D], [E,F],
  [F,B], [F,E]
];

const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const log = console.log.bind(console.log);
const test = ({ graph, dfsVertices, dfsPaths }, n) => loop(Number.parseInt(n) || 1, () => {
  const g = graph(vs, xs);
  dfsVertices(log)(g);
  dfsPaths(log)(g, A, B);
});

module.exports = test;