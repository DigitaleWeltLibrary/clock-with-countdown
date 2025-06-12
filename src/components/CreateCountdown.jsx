import {  useState } from "react"
import style from "../style/CreateCountdown.module.scss"

export default function CreateCountdown({ settimecountdown, setcreatetimer }) {

    const [getcowndowntoday, setcowndowntoday] = useState(true)
    const [gettimedate, settimedate] = useState(null)

    const handleDateTimeInput = (e) => {
        const value = e.target.value;
        const inputType = e.target.type;
        let newDate

        if (!value) {
            setTargetDateTime(null);
            return;
        }

        if (inputType == "datetime-local") {
            newDate = value
        } else {
            let date = new Date().toISOString().slice(0, 10)
            newDate = `${date}T${value}`
        }

        settimedate(newDate);
    };

    return (

        <article className={style.createcountdown}>
            <section>
                <h2>Create Countdown for </h2>
                <button onClick={() => setcowndowntoday(prev => !prev)}>
                    {getcowndowntoday ? "today" : "a other day"}
                </button>
            </section>
            <section>
                <input
                    type={getcowndowntoday ? "time" : "datetime-local"}
                    onChange={(e) => handleDateTimeInput(e)}
                />
                <button
                    onClick={() => {
                        settimecountdown(gettimedate)
                        setcreatetimer(false)
                    }}
                >Create</button>
            </section>
        </article>
    )
}