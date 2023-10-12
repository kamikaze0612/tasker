/* eslint-disable no-case-declarations */
import Main from "./components/Main/Main";
import { TaskContextProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <Main />
    </TaskContextProvider>
  );
}

export default App;
