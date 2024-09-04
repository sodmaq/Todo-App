import { BrowserRouter } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Todo />
      <Quote />
    </BrowserRouter>
  );
}

export default App;
