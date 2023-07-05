import { useState, createContext, useReducer } from "react";
import PropTypes from "prop-types";

const TasksContext = createContext(null);
const DisplayModeContext = createContext(null);

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "DELETE": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "CHANGE": {
      return tasks.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    }
    case "CLEAR": {
      return tasks.filter((t) => t.done === false);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export { TasksContext, DisplayModeContext };

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [displayMode, setDisplayMode] = useState("ALL");

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <DisplayModeContext.Provider value={{ displayMode, setDisplayMode }}>{children}</DisplayModeContext.Provider>
    </TasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
