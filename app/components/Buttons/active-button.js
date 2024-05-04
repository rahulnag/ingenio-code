import styles from './style.module.css'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
const ActiveButton = ({ text, refr }) => {
    return (
        <button className={styles['active-button']}>
            {refr == "call" && <IoMdCall style={{ marginRight: "3px", fontSize: '1rem' }} />}
            {refr == "chat" && <MdMessage style={{ marginRight: "3px", fontSize: '1rem' }} />}
            {text}
        </button>
    );
};

export default ActiveButton;