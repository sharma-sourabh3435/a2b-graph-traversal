import { initMap, getSelectedPoints, clearMarkers } from "./map.js";
import { bfs } from './algorithms/bfs.js';
import { visualizeTraversal } from "./visualise.js";
import { graph } from "./graph.js";

const map = initMap();

// Helper function to find nearest node to a lat/lng point
function findNearestNode(point) {
    let nearest = null;
    let minDistance = Infinity;
    
    for (const nodeId in graph) {
        const node = graph[nodeId];
        const distance = Math.sqrt(
            Math.pow(node.lat - point.lat, 2) + 
            Math.pow(node.lon - point.lng, 2)
        );
        if (distance < minDistance) {
            minDistance = distance;
            nearest = nodeId;
        }
    }
    console.log("Nearest node to", point, "is", nearest);
    return nearest;
}

document.getElementById('run').addEventListener('click', async () => {
    const points = getSelectedPoints();
    console.log("Selected points:", points);
    if(points.length < 2) return alert("Select two points first!");

    const start = findNearestNode(points[0]);
    const goal = findNearestNode(points[1]);
    console.log("Start:", start, "Goal:", goal);

    clearMarkers();
    await visualizeTraversal(map, graph, start, goal, bfs);
});

document.getElementById('reset').addEventListener('click', () => {
    location.reload();
})