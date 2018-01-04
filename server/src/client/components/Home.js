import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the BEST SUPER home component</div>
      <button onClick={() => { console.log('clicked button!')}}>Press me!</button>
    </div>
  )
}

export default Home;