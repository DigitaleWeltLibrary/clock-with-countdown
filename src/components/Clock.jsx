import { useEffect } from "react"
import { useState } from "react"
import style from "../style/clock.module.scss"
import ShowCreateTimer from "./ShowCreateTimer"

export default function clock({ setcreatetimer }) {

    const [getcurrenttime, setcurrenttime] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(
            () => {
                setcurrenttime(new Date())
            },
            1000
        )
        return () => clearInterval(timerId)
    }, [])

    const addzero = (num) => num < 10 ? `0${num}` : num

    const hours = addzero(getcurrenttime.getHours())
    const minutes = addzero(getcurrenttime.getMinutes())
    const seconds = addzero(getcurrenttime.getSeconds())

    return (
        <>
            <article className={style.clock}>
                <div>
                    <h2>{hours}</h2>
                    <p>Hours</p>
                </div>
                <p>:</p>
                <div>
                    <h2>{minutes}</h2>
                    <p>Minutes</p>
                </div>
                <p>:</p>
                <div>
                    <h2>{seconds}</h2>
                    <p>Seconds</p>
                </div>
                <ShowCreateTimer
                    setcreatetimer={setcreatetimer}
                    componentstyle={style.setcountdown}
                />
            </article>
        </>

    )
}