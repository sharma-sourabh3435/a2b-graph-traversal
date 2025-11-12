import { delay } from "./utils.js";

export async function visualizeTraversal(map, graph, start, goal, algorithm) {
    console.log("Starting traversal from", start, "to", goal);
    
    const onVisit = async (a, b) => {
        const latlngs = [
            [graph[a].lat, graph[a].lon],
            [graph[b].lat, graph[b].lon]
        ];
        L.polyline(latlngs, { color: 'blue'}).addTo(map);
        await delay(100);
    };

    await algorithm(start, goal, graph, onVisit);
}