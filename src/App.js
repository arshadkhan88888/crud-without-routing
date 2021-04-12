import React from 'react';
import Professinal_list from './Routing/Professional_list';
import Professional_detail from './Routing/Professional_detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import cors from 'cors'
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div className='App'>
    
      <div>
        <h1>Task</h1>
        <Router>
        <Helmet>
        <title>Alkurn-Tech</title>
        </Helmet>
          <Route exact path='/' component={Professinal_list}/>
          <Route exact path='/social/:id' component={Professional_detail}/>
        </Router>
      </div>
    </div>
  );
};

export default App;