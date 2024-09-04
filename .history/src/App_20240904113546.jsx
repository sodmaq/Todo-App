import { BrowserRouter, Route } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Todo />} />
      <Route path="/Quote" element={<Quote />} />
    </BrowserRouter>
  );
}

export default App;
