import React from "react";

function HistoryItem({ index, historyItem, handleUndoMove }) {
  if (index === 0) {
    return (
      <li>
        <button
          className="button"
          onClick={() => handleUndoMove(index, historyItem)}
        >
          Go to game start
        </button>
      </li>
    );
  } else
    return (
      <li>
        <button
          className="button"
          onClick={() => handleUndoMove(index, historyItem)}
        >
          Go to move #{index}
        </button>
      </li>
    );
}

export default HistoryItem;
