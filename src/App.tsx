import "antd/dist/antd.css";
import Users from "./components/users/Users";
import User from "./components/user/User";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/accounts" element={<Users />} />
        <Route path="/accounts/:id" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
