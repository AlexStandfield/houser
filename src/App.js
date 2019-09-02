import React from 'react';
import routes from './routes'
import Header from './Components/Header/Header'
import {HashRouter} from 'react-router-dom'

import 'reset-css'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
