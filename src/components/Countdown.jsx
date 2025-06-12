import { useState } from "react";
import { useEffect } from "react";
import style from "../style/countdown.module.scss"


export default function Countdown({ gettimecountdown }) {

    const [getcountdown, setCountdown] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    const addZero = (num) =>
        num < 10 ? '0' + num : '' + num;

    const getDateDifference = (date1, date2) => {

        if (!(date1 instanceof Date) || isNaN(date1.getTime()) || !(date2 instanceof Date) || isNaN(date2.getTime())) {
            console.error("Invalid date objects passed.");
            return { days: "??", hours: "??", minutes: "??", seconds: "??" };
        }

        let diff = Math.abs(date2.getTime() - date1.getTime());

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        return {
            days: addZero(days),
            hours: addZero(hours % 24),
            minutes: addZero(minutes % 60),
            seconds: addZero(seconds % 60)
        };
    }

    useEffect(() => {
        const timerId = setInterval(
            () => {
                setCountdown(getDateDifference(new Date(), new Date(gettimecountdown)))

            },
            1000
        )
        return () => clearInterval(timerId)
    }, [gettimecountdown])

    let { days, hours, minutes, seconds } = getcountdown


    return (
        <section className={style.countdown}>
            <h2>Countdown</h2>

            <section>
                <div>
                    <h3>{days}</h3>
                    <p>Days</p>
                </div>
                <p>:</p>
                <div>
                    <h3>{hours}</h3>
                    <p>Hours</p>
                </div>
                <p>:</p>
                <div>
                    <h3>{minutes}</h3>
                    <p>Minutes</p>
                </div>
                <p>:</p>
                <div>
                    <h3>{seconds}</h3>
                    <p>Seconds</p>
                </div>
            </section>
        </section>
    )
}