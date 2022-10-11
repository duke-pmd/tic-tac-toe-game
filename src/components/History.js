import React from "react";
import HistoryItem from "./HistoryItem";

export default function History({ history, handleUndoMove }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((historyItem, index) => (
          <HistoryItem
            key={index}
            index={index}
            historyItem={historyItem}
            handleUndoMove={handleUndoMove}
          />
        ))}
      </ul>
    </div>
  );
}
