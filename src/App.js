import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./App.css";
import Footer from "./components/Footer";
import MyStory from "./pages/MyStory";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/my-story">
          <MyStory />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
