import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const style = {
        color: 'black',
        textDecoration: 'none',
    }

    return (
        <div className="home">
        <h1>My STORE</h1>
        <button className="go-to-shop-button">
            <Link style={style} to="/Shop">
                GO TO SHOP
            </Link>
        </button>
    </div>
);
};

export default Home;