import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Company from './pages/Company';

const App = function () {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/company:name">
    //       <Company />
    //     </Route>
    //     <Route path="/company">
    //       <Company />
    //     </Route>
    //     <Route exact path="/">
    //       <Main />
    //     </Route>
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        <Route path="/company:name" element={<Company />} />
        <Route path="/company" element={<Company />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
