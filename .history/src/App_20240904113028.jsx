import { BrowserRouter } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Quote />
      <Todo />
    </BrowserRouter>
  );
}

export default App;
