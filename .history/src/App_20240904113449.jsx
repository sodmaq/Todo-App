import { BrowserRouter, Route } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Todo} />
      <Route path="/Quote" component={Quote} />
    </BrowserRouter>
  );
}

export default App;
