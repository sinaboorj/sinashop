import { useContext } from "react";
import UserContext from "./userContext";

const UsersCount = () => {
    const { usersList, textButton, onToggleLuck } = useContext(UserContext);

    return (
        <>
            <hr />
            Number Of Users: {usersList.length}{" "}
            <button className={textButton === 'Luck' ? "warning general-btn" : "danger general-btn"}
                onClick={onToggleLuck} >
                {textButton}
            </button>
        </>
    );
}

export default UsersCount;
