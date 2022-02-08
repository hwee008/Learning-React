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
 <App name="GraphQL"/>,
  document.getElementById('root')
);

//Excercise view it in console log (ARRAY DESTRUCTURING)
//Example 1
/*
const [first,second,third] = ["popcorn","pretzels","pineapple"];
console.log(first);
console.log(second);
*/

//Example 2
const [,,fruit] = ["popcorn","pretzels","pineapple"];
console.log(fruit);
