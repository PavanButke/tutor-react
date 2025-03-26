import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  )
}

function Button(props) {

  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  // return React.createElement(
  //   'button',
  //   { onClick: onButtonClick },
  //   `Counter ${props.count}`
  // );

  return <button onClick={onButtonClick}>Counter{props.count}</button>

}
export default App;