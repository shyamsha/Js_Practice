function useTraverseTree() {
  function insertNode(tree, folderId, name, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.files.unshift({
        id: new Date(),
        name: name,
        isFolder: isFolder,
        files: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.files.map((file) => {
      return insertNode(file, folderId, name, isFolder);
    });
    return {
      ...tree,
      files: latestNode,
    };
  }
  return { insertNode };
}

export default useTraverseTree;
