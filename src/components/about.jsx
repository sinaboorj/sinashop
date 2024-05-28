import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="about">
                <h4>Programmed By:</h4>
                <div className="about-sina">
                    <h1 className="h1-about">Hossein Zarei </h1>
                    <h4> 'Sina'</h4>
                </div>
                <div className="explain">
                    JUST FOR SAMPLE
                </div>
                <button className="success" onClick={() => { navigate('/') }} style={{ marginTop: '100px', fontSize: '16px', color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center', margin: '30px auto auto auto' }} > Go Shop </button>
            </div>
        </>
    )
}
 
export default About;