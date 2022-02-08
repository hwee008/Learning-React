import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(){
  return(
      <h1>Lake!</h1>
  );
}

  function SkiResort(){
    return(
        <h1>Ski Resort!</h1>
    );
  }

  function App(){
    return(
      //fragment allows rendering both element at the same time without 
      //causing creation of many divs
      <>
          <Lake/>
          <SkiResort/>
      </>
    
    );
  }
  
ReactDOM.render(
 <App />,
  document.getElementById('root')
);

