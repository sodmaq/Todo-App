import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
