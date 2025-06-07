import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowCreateTimer({ setcreatetimer, componentstyle }) {

    return (
        <section
            className={componentstyle}
            onClick={() => setcreatetimer(prev => !prev)}
        >
            <FontAwesomeIcon
                icon={faBell}
                color="#03DAC6 "
            />
            <p>Set Countdown</p>
        </section>
    )
}
