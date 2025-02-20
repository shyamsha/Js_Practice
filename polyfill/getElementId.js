// polyfill for document.getElementById

function customGetElementById(tree, id) {
  if (!tree) {
    return null;
  }
  if (tree.id === id) {
    return tree;
  }
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      const result = customGetElementById(tree.children[i], id);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
