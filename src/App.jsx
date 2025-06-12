import { useEffect, useState } from 'react'
import Clock from './components/Clock.jsx'
import CreateCountdown from './components/CreateCountdown.jsx'
import Countdown from './components/Countdown.jsx'

export default function App() {

  const [getcreatetimer, setcreatetimer] = useState(false)
  const [gettimecountdown, settimecountdown] = useState(() => {
    if (localStorage.getItem("timecountdown") !== null) {
      return localStorage.getItem("timecountdown")
    } else return false
  })

  useEffect(() => {
    if (gettimecountdown !== null) {
      localStorage.setItem("timecountdown", gettimecountdown);
    }
  }, [gettimecountdown]);

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
              settimecountdown={settimecountdown}
              gettimecountdown={gettimecountdown}
            />) :
          null
      }
    </main>
  )
}

