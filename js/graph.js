export const graph = {
  A: { lat: 44.6488, lon: -63.5752, neighbors: ['B', 'C'] },
  B: { lat: 44.6490, lon: -63.5740, neighbors: ['A', 'D'] },
  C: { lat: 44.6475, lon: -63.5745, neighbors: ['A', 'E'] },
  D: { lat: 44.6495, lon: -63.5730, neighbors: ['B', 'E'] },
  E: { lat: 44.6470, lon: -63.5735, neighbors: ['C', 'D'] },
};
