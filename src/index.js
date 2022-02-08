import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}){
  return(
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

  function SkiResort({name}){
    return(
      <div>
        <h1>Visit {name}!</h1>
      </div>
    );
  }

  function App(props){
    return(
      //condition ? component to render if true : component to render if false
      <div>
        {(props.season==="summer" ? <Lake name="Jenny Lake"/> :<SkiResort name="JHMR"/> )}
      </div>
    )
  }
  
ReactDOM.render(
 <App season="winter"/>,
  document.getElementById('root')
);

