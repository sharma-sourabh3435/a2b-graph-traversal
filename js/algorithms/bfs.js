export async function bfs(start, goal, graph, onVisit) {
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const current = queue.shift();
        console.log("Visiting:", current); // debug
        
        if(current === goal) {
            console.log("Goal reached:", goal);
            break;
        }

        // Check if current exists in graph before accessing neighbors
        if (!graph[current]) {
            console.warn("Node not found in graph:", current);
            continue;
        }

        for (const next of graph[current].neighbors) {
            if (!visited.has(next)) {
                visited.add(next);
                queue.push(next);
                await onVisit(current, next);
            }
        }
    }
}