import { useState } from 'react'
import Clock from './components/Clock.jsx'
import CreateCountdown from './components/CreateCountdown.jsx'

export default function App() {

  const [getcreatetimer, setcreatetimer] = useState(false)
  const [gettimecountdown, settimecountdown] = useState(false)

  return (
    <main>
      <Clock
        setcreatetimer={setcreatetimer}
      />
      {
        getcreatetimer || gettimecountdown != false ?
          (getcreatetimer ?
            <CreateCountdown
              settimecountdown={settimecountdown}
              setcreatetimer={setcreatetimer}
            /> :
            "nein") :
          null
      }
    </main>
  )
}

