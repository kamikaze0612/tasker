/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";

const TaskContext = createContext();

function reducer(state, { type, payload }) {
  switch (type) {
    case "addTask":
      const newArray = state.map((board) => {
        if (board.id === payload.id) {
          return payload;
        } else {
          return board;
        }
      });
      return newArray;

    case "addBoard":
      return [
        ...state,
        {
          id: state.length + 1,
          boardTitle: payload,
          tasks: [],
        },
      ];

    case "changeStatus":
      const newState = state.map((board) => {
        if (payload.curBoard === board.id - 1) {
          const newTasks = board.tasks.map((task) => {
            if (task.taskId === payload.id) {
              return {
                ...task,
                status: payload.newStatus,
              };
            } else return task;
          });
          return {
            ...board,
            tasks: newTasks,
          };
        } else return board;
      });

      return newState;

    case "deleteTask":
      return state.map((board) => {
        if (board.id - 1 === payload.curBoard) {
          const newTasks = board.tasks.filter((task) => {
            return task.taskId !== payload.id;
          });

          return {
            ...board,
            tasks: newTasks,
          };
        } else return board;
      });

    default:
      throw new Error("Unknown action!");
  }
}

function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);
  const [boardIndex, setBoardIndex] = useState(0);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <TaskContext.Provider
      value={{
        dispatch,
        state,
        boardIndex,
        setBoardIndex,
        showTaskForm,
        setShowTaskForm,
        showBoardForm,
        setShowBoardForm,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (TaskContext === undefined)
    throw new Error("TaskProvider is declared outside of TaskContext");

  return context;
}

export { TaskContextProvider, useTasks };
