import { useEffect, useState } from "react"
import style from "../style/CreateCountdown.module.scss"

export default function CreateCountdown({ settimecountdown, setcreatetimer }) {
    /* NOTE to change cowndowntype: today | otherday  */
    const [getcowndowntoday, setcowndowntoday] = useState(true)

    /* NOTE saves the date of the countdown while it isn't submitted */
    const [gettimedate, settimedate] = useState(null)

    /* NOTE disable button if input is empty */
    const [getdisabled, setdisabled] = useState(true)

    /* NOTE transforms input into datetime and save it into state*/
    const handleDateTimeInput = (e) => {
        const value = e.target.value;
        const inputType = e.target.type;
        let newDate

        if (!value || value.length === "") {
            setTargetDateTime(null)
            settimedate(null)
            return;
        }

        if (inputType == "datetime-local") {
            newDate = value
        } else {
            let date = new Date().toISOString().slice(0, 10)
            newDate = `${date}T${value}`
        }

        settimedate(newDate);
        setdisabled(false)
    };

    /* NOTE disabled button if input type changes */
    useEffect(() => {
        setdisabled(true)
    }, [getcowndowntoday])

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
                    disabled={getdisabled}
                    onClick={() => {
                        settimecountdown(gettimedate)
                        setcreatetimer(false)
                    }}
                >Create</button>
            </section>
        </article>
    )
}