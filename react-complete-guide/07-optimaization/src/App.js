import React, { useState } from 'react';

import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	const togglePragraphHandler = () => {
		setShowParagraph((prevState) => !prevState);
	}

	console.log('App running');

  return (
    <div className="app">
      <h1>Hi there!</h1>
	  <DemoOutput show={false}/>
	  <Button onClick={togglePragraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
