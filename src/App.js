import React from 'react';
import Signup from './components/Signup/Signup';
import './styles/index.scss';

const App = () => {
  return (
      <div className="full-page-container">
        <div className="full-page-card-container">
          <Signup/>
        </div>
      </div>
  )
}

export default App;
