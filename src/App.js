import React from 'react';
import './App.css';
import BenefitsList from './components/BenefitsList';
import BenefitsHeading from './components/BenefitsHeading';

function App() {
  return (
    <div className="App">
        <BenefitsHeading />
      <div>
        <BenefitsList />
      </div>
    </div>
  );
}

export default App;
