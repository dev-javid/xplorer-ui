import { ExamplesNav } from "./ExamplesNav";
import MailPage from "./mail/page";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TaskPage from "./table/Table";
import Thmeme from "./theme";

function App() {
  return (
      <Router>
        <ExamplesNav />
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
          <Routes>
            <Route path="/" Component={MailPage}></Route>
            <Route path="/examples/mail" Component={MailPage}></Route>
            <Route path="/examples/tasks" Component={TaskPage}></Route>
            <Route path="/examples/theme" Component={Thmeme}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
