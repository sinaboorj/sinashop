import React from "react";
import "react-loading-skeleton/dist/skeleton.css"
import Skeleton from "react-loading-skeleton";
import { useContext } from "react";
import UserContext from "./userContext";

const LoadingUsers = () => {
    const { errType,error } = useContext(UserContext);
    return (
        <>
         
        {error && <h4 style={{ textAlign: 'center' }}>There is an error: " {errType} "</h4>}
           
            
        <div className="user-list">
              <br />
            {
                Array(6).fill({}).map(u => {
                    return (
                        <div className="col-2 text-center p-5">
                            <Skeleton className="mb-1" style={{ borderRadius: "50%", height: "100px", width: "100px" }} />
                            <Skeleton className="mb-1" style={{ height: 25 }} count={2} />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
 
export default LoadingUsers