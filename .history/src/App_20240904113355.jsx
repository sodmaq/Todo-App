import { BrowserRouter, Route } from "react-router-dom";
import Quote from "./components/Quote";
import Todo from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Todo} />
      <Route exact path="/" component={Quote} />
    </BrowserRouter>
  );
}

export default App;
