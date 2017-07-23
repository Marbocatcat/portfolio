import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

// Pages
import FrontPage from './pages/Front_Page';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ FrontPage } />
    </Router>
  )
}

export default App;
