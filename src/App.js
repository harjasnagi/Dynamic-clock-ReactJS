import React, { useState } from 'react';

const App = () => {
  
  const timenow = new Date().getHours()
  let greeting = '';
  const mycss = { };

  if(timenow >= 1 && timenow < 12){
    greeting = 'Good Morning';
    mycss.color = 'green';
  }
  else if(timenow >= 12 && timenow < 16){
    greeting = 'Good Afternoon';
    mycss.color = '#432342';
  }
  else if(timenow >= 16 && timenow < 19){
    greeting = 'Good Evening';
    mycss.color = 'orange';
  }
  else{
    greeting = 'Good Night';
    mycss.color = 'purple';
  }



  let time = new Date().toLocaleTimeString();
  const [currTime, setTime] = useState(time);
  
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(updateTime, 1000)

  return (
    <>
      <h1>Hello Harjas,<span style={mycss}> {greeting} </span>  <br></br>{currTime} </h1>
    </>
  );
};

export default App;