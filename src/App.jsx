/* eslint-disable no-case-declarations */
import { useReducer, useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Planner from "./components/Planner/Planner";
import TaskForm from "./components/TaskForm/TaskForm";

const initialState = [
  {
    id: 1,
    boardTitle: "Platform Launch",
    tasks: [
      {
        taskId: 123524,
        taskTitle: "Do the laundry",
        description: "It helps to your mental health",
        status: "to do",
        subtasks: {
          0: "Hello from the other side",
          1: "It must have been a thousand times",
        },
      },
      {
        taskId: 1356524,
        taskTitle: "Do the house chores",
        description: "It helps to your mental health",
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
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [boardIndex, setBoardIndex] = useState(0);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showBoardForm, setShowBoardForm] = useState(false);

  return (
    <Main>
      {showTaskForm && (
        <TaskForm
          curBoard={state[boardIndex]}
          onToggleTaskForm={setShowTaskForm}
          dispatch={dispatch}
        />
      )}
      <Sidebar
        dispatch={dispatch}
        boards={state}
        index={boardIndex}
        showBoardForm={showBoardForm}
        onToggleBoardForm={setShowBoardForm}
        onClickLabel={setBoardIndex}
      />
      {state.length > 0 ? (
        <Planner
          onToggleTaskForm={setShowTaskForm}
          tasks={state[boardIndex].tasks}
        />
      ) : (
        ""
      )}
    </Main>
  );
}

export default App;
