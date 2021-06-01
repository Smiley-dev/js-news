import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Categories from "./Categories/Categories";
import Article from "./Article/Article";
import classes from "./App.module.css";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/news/:title" component={Article} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
