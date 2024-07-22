import React from "react";
import Board from "../components/Board";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/game');
    }

    return (
        <>
            <div style={{ display: 'flex', height: '60vh', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ backgroundColor: 'black', padding: '10px 30px' }}>
                    <span style={{ margin: '0 12px', color: 'red', backgroundColor: 'black' }}>TIC</span>
                    <span style={{ margin: '0 12px', color: 'blue', backgroundColor: 'black' }}>TAC</span>
                    <span style={{ margin: '0 12px', color: 'green', backgroundColor: 'black' }}>TOE</span>
                </h1>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
            <button onClick={handleClick } style={{border:'none', color:' white', backgroundColor:'rgb(20, 146, 20)', padding:'10px 30px', borderRadius:'15px', fontSize:'large' }}>Start</button>
            </div>
        </>
    );
};

export default Homepage;