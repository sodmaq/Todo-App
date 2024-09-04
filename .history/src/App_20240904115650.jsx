import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/todo" />} />
        <Route path="/" element={<Todo />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
