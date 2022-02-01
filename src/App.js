import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      app component
      <BrowserRouter>
        <Switch>
          <Route exact to="/">
            <Home />
          </Route>
          <Route exact to="/signup">
            <Signup />
          </Route>
          <Route exact to="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
