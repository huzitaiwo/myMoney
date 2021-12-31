import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// pages and components 


// styles
import './App.css'

function App() {
  return (
    <div className="App">
      app component
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
