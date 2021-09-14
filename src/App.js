import { BrowserRouter, Route, Switch } from "react-router-dom";
import GetComments from "./components/GetComments";
import GetList from "./components/GetList";

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={GetList}/>
        <Route exact path="/GetComments" component={GetComments}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
