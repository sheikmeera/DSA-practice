/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const map = new Map();

    function dfs(curr) {
        if (map.has(curr)) {
            return map.get(curr);
        }

        const clonedNode = new _Node(curr.val);
        map.set(curr, clonedNode);

        for (let neighbor of curr.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }

        return clonedNode;
    }

    return dfs(node);
};