import React from "react";

const SecondsCounter = ({seconds}) => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row container text-white p-5 mx-auto">
                <div className="col text-center">
                <i className="fa-regular fa-clock"></i>     
                </div>
                <div className="col text-center">{Math.floor(seconds / 100000) % 10}</div>
                <div className="col text-center">{Math.floor(seconds / 10000) % 10}</div>
                <div className="col text-center">{Math.floor(seconds / 1000) % 10}</div>
                <div className="col text-center">{Math.floor(seconds / 100) % 10}</div>
                <div className="col text-center">{Math.floor(seconds / 10) % 10}</div>
                <div className="col text-center">{Math.floor(seconds / 1) % 10}</div>
            </div>
        </div>
    )
}
export default SecondsCounter;