import { useState } from 'react'
import Clock from './components/Clock.jsx'

export default function App() {

  const [getcreatetimer, setcreatetimer] = useState(false)

  return (
    <main>
      <Clock
        setcreatetimer={setcreatetimer}
      />
      {
        getcreatetimer ? "ja" : "nein"
      }
    </main>
  )
}

