import { useState } from 'react'
import Clock from './components/Clock.jsx'
import CreateCountdown from './components/CreateCountdown.jsx'
import Countdown from './components/Countdown.jsx'

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
            <Countdown
              gettimecountdown={gettimecountdown}
            />) :
          null
      }
    </main>
  )
}

