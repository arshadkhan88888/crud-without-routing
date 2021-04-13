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
            <meta property="og:title" content="Alkurn-Technology" />
      <meta property="og:description" content="description" />
        <meta
        property="og:url"
        content="https://alkurntech-reactjs-1st.herokuapp.com/"
      />
      <meta
        property="og:image:secure_url"
        content='https://media.glassdoor.com/sqll/2368519/alkurn-technologies-squarelogo-1585304658018.png'
      />
      <meta property="fb:app_id" content="264765292010240" />
      <meta property="og:type" content="website" />
        </Helmet>
          <Route exact path='/' component={Professinal_list}/>
          <Route exact path='/social/:id' component={Professional_detail}/>
        </Router>
      </div>
    </div>
  );
};

export default App;