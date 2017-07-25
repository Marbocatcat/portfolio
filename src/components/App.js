import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

// Pages
import FrontPage from './pages/Front_Page';
import BlogPage from './pages/Blog_Page';

const App = () => {
  return (
    <Router>
      <article>
        <Route exact path="/" component={ FrontPage } />
        <Route exact path="/Blog" component={ BlogPage } />
      </article>
    </Router>
  )
}

export default App;
