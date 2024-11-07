import React, { useState } from "react";
import "./styles.css";

function Folder({ handleInsertNode, explorer }) {
  const [isVisible, setIsVisible] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleCreateFolder = (e, isFolder) => {
    e.stopPropagation();
    setIsVisible(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        ...showInput,
        visible: false,
      });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginLeft: "2rem" }}>
        <div className="folder">
          <i class="fa fa-folder" style={{ fontSize: "18px", color: "red" }}>
            <span onClick={() => setIsVisible(!isVisible)}>
              {explorer.name}
            </span>
          </i>
          <div>
            <button onClick={(e) => handleCreateFolder(e, true)}>
              Folder +
            </button>
            <button onClick={(e) => handleCreateFolder(e, false)}>
              File +
            </button>
          </div>
        </div>
        <div
          style={{ display: isVisible ? "block" : "none", paddingLeft: "5px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>
                {showInput.isFolder ? (
                  <i
                    class="fa fa-folder"
                    style={{ fontSize: "18px", color: "red" }}
                  />
                ) : (
                  <i
                    class="fa fa-file-code-o"
                    style={{ fontSize: "18px", color: "red" }}
                  />
                )}
              </span>
              <input
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={(e) => onAddFolder(e)}
                className="inputContainer__input"
              />
            </div>
          )}

          {explorer.files.map((file) => {
            return (
              <Folder handleInsertNode={handleInsertNode} explorer={file} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file">
        <i
          class="fa fa-file-code-o"
          style={{ fontSize: "18px", color: "red" }}
        />
        {explorer.name}
      </span>
    );
  }
}

export default Folder;
