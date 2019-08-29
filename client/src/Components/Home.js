import React, {Component} from "react";
import {NavLink} from "react-router-dom";

//components
import Header from "./Common/Header";
import Circle from "./Common/Circle";
import Footer from "./Common/Footer";

//image
import Banner from "../assets/image/church.jpg";

class Home extends Component {
    render(){
        return(
            <>
            <Header/>
            <div className="banner">
                <img src={Banner} alt="banner"></img>
            </div>
            <div className="row">
                <NavLink to="/live"><Circle children="Livestream" child="Click here"/></NavLink>
                <NavLink to="/forum"><Circle children="Forum"/></NavLink>
                <NavLink to="prayer"><Circle children="Add a Prayer Request"/></NavLink>
                <NavLink to="/youth"><Circle children="Youth Church"/></NavLink>
            </div>
            <Footer/>
            </>
        )
    }
};

export default Home;