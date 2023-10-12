/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";

const TaskContext = createContext();

const initialState = [
  {
    id: 1,
    boardTitle: "House Chores",
    tasks: [
      {
        taskId: 123524,
        taskTitle: "Do the laundry",
        description: "Wash the clothes in the basket",
        status: "to do",
        subtasks: {
          0: "Lorem ipsum dolor sit amet.",
          1: "Donec quam felis, ultricies nec",
        },
      },
      {
        taskId: 1356524,
        taskTitle: "Clean the room",
        description: "Helps mental health wellness",
        status: "doing",
        subtasks: {},
      },
    ],
  },
  {
    id: 2,
    boardTitle: "Marketting Plan",
    tasks: [
      {
        taskId: 453524,
        taskTitle: "Create the graph",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        status: "to do",
        subtasks: {},
      },
      {
        taskId: 157624,
        taskTitle: "Meet with the boss",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, atque!",
        status: "done",
        subtasks: {},
      },
    ],
  },
  {
    id: 3,
    boardTitle: "Roadmap",
    tasks: [
      {
        taskId: 123464,
        taskTitle: "Draw up the roadmap",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid?",
        status: "doing",
        subtasks: {},
      },
      {
        taskId: 109234,
        taskTitle: "Brainstorm new ideas",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perspiciatis!",
        status: "done",
        subtasks: {},
      },
    ],
  },
];

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
  const [state, dispatch] = useReducer(reducer, initialState);
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
