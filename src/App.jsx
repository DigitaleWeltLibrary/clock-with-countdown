import { useEffect, useState } from 'react'
import Clock from './components/Clock.jsx'
import CreateCountdown from './components/CreateCountdown.jsx'
import Countdown from './components/Countdown.jsx'

export default function App() {
  /* NOTE state to show the create timer component */
  const [getcreatetimer, setcreatetimer] = useState(false)

  /* NOTE gets the countdown from localstorage or set the state to false */
  const [gettimecountdown, settimecountdown] = useState(() => {
    if (localStorage.getItem("timecountdown") !== null) {
      return localStorage.getItem("timecountdown")
    } else return false
  })

  /* NOTE saves the countdown to localstorage */
  useEffect(() => {
    if (gettimecountdown !== null && gettimecountdown !== false) {
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

