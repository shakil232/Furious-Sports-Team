import './App.css';
import {BrowserRouter as Router,Route,Switch,useLocation} from "react-router-dom";
import Header from './Components/Header/Header';
import Details from './Components/Details/Details';
import NotFound from './Components/NotFound/NotFound';



function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header/>
        </Route>
        <Route exact path="/header">
          <Header/>
        </Route>
        <Route path="/details/:detailsId">
          <Details/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
