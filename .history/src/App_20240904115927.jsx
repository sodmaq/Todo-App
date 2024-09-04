import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/quote" element={<Quote />} />
        {/* Optional redirect if you need it
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
