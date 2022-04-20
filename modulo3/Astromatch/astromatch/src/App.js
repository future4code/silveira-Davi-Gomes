import React, { useState } from 'react'
import Home  from './components/Home'
import Matches from './components/Matches'
export default function App()  {
  const [home, setHome] = useState("home")

  const irParaHome = () => {
    setHome("home")
  }
  const irParaMatches = () => {
    setHome("matches")
  }

  const escolheTela = () => {
    switch (home) {
      case "home":
        return <Home irParaMatches = {irParaMatches}/>
      case "matches":
        return <Matches irParaHome ={irParaHome} />
    }
  }

  return (
    <div>
      {escolheTela()}
    </div>
  )

}

