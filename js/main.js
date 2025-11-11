import { initMap, getSelectedPoints, clearMarkers } from "./map.js";
import { bfs } from './algorithms/bfs.js';
import { visualizeTraversal } from "./visualise.js";
import { graph } from "./graph.js";

const map = initMap();

document.getElementById('run').addEventListener('click', async () => {
    const [start, goal ] = getSelectedPoints();
    if(!start || !goal) return alert("Select two points first!");

    clearMarkers();
    await visualizeTraversal(map, graph, start, goal, bfs);
});

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
})