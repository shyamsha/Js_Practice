import React from "react";
import Folder from "./Folder";
import { useState } from "react";
import { data } from "./data";
import useTraverseTree from "./hooks/useTraverseTree";

function FileExplorer() {
  const [explorer, setExplorer] = useState(data);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, name, isFolder) => {
    const finalTree = insertNode(explorer, folderId, name, isFolder);
    setExplorer(finalTree);
  };
  return (
    <>
      <Folder handleInsertNode={handleInsertNode} explorer={explorer} />
    </>
  );
}

export default FileExplorer;
