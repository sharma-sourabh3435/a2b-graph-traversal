export async function bfs(start, goal, graph, onVisit) {
    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const current = queue.shift();
        if(current == goal) break;

        for (const next of graph[current].neighbors) {
            if (!visited.has(next)) {
                visited.add(next);
                queue.push(next);
                await onVisit(current, next);
            }
        }
    }
}