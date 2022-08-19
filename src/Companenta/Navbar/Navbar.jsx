import React, { useContext, useState } from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import { TiShoppingCart } from 'react-icons/ti';
import { StateContext } from "../../App";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const { savatcha } = useContext(StateContext);
    function Scroll() {
        if (window.pageYOFFset > 100) {
            setScrolled((p) => !p);
            return;
        }
        setScrolled(false);
    }
    window.addEventListener("scroll", Scroll);
    return (
        <div className='nav'>
            <div className="txt">
                <h1>Logo</h1>
            </div>
            <div className="btn">
                <button onClick={() => navigate("/")}>Home</button>
                {/* <button onClick={() => navigate("/about")}>About</button>
                <button onClick={() => navigate("/login")}>Login</button> */}
                <div className="nav_basket">

                    <TiShoppingCart onClick={() => navigate("/savat")} className='basket_icon' />
                    <sup>{savatcha.length}</sup>
                </div>

            </div>
        </div>
    )
}

export default Navbar