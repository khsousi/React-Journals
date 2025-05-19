import Header from './Components/Header'
import Entry from './Components/Entry'
import journals from "./data.js"

import './App.css'

function App() {
  return (
    <>
      <Header />
      {journals.map((journal, index)=><Entry key={index} {...journal} />)}
    </>
  )
}

export default App
