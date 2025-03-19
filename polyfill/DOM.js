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

// polyfill for document.getElementsByClassName

function customGetElementsByClassName(tree, className) {
  let result = [];
  if (!tree) {
    return result;
  }
  if (tree.classList && tree.classList.contains(className)) {
    result.push(tree);
  }
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      const elements = customGetElementsByClassName(
        tree.children[i],
        className
      );
      result = result.concat(elements);
    }
  }
  return result;
}

// polyfill for document.getElementsByTagName

function customGetElementsByTagName(tree, tagName) {
  let result = [];
  if (!tree) {
    return result;
  }
  if (tree.tagName && tree.tagName.toLowerCase() === tagName) {
    result.push(tree);
  }
  if (tree.children) {
    for (let i = 0; i < tree.children.length; i++) {
      const elements = customGetElementsByTagName(tree.children[i], tagName);
      result = result.concat(elements);
    }
  }
  return result;
}
