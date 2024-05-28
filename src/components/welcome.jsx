import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
    const [welcome, setWelcome] = useState()
    useEffect(() => {
        const data = localStorage.getItem('firstWelcomeMessage')
        setWelcome(JSON.parse(data) ?? true)
    },[])
    return (
        <React.Fragment>
            {welcome && (
                <div className="welcome">
                    <span style={{ margin: 'auto' }}>Welcome to Sina shop</span>
                    <FontAwesomeIcon icon={faClose} style={{ float: 'right', cursor: 'pointer' }} onClick={closeWelcome} />
                </div>
            )}
        </React.Fragment>
    );

    function closeWelcome() {
        setWelcome(false)
        localStorage.setItem('firstWelcomeMessage',JSON.stringify(false))
    }
} 
export default Welcome;
