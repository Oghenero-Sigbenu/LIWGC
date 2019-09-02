import React, {Component} from "react";
import {NavLink} from "react-router-dom";


//components
import Header from "./Common/Header";
import Circle from "./Common/Circle";
import Modal from "./Modal/Modal";
import Footer from "./Common/Footer";
import Prayers from "./PrayerRequest";

//image
import Banner from "../assets/image/church.jpg";

class Home extends Component {
    constructor() {
        super();

        this.state = {
            isShowing: false
        }
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
    };
    openModalHandler = () => {
        console.log("noooo")
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        return(
            <>
            <Header/>
            <div className="banner">
                <img src={Banner} alt="banner"></img>
            </div>
            <div className="rows">
                <NavLink className="link" to="/"><Circle children="Livestream" /></NavLink>
                <NavLink className="link" to="/forum"><Circle children="Forum" /></NavLink>
                <NavLink className="link" to=""><Circle children=" Prayer Request" click={this.openModalHandler} /></NavLink>
                <NavLink className="link" to="youth"><Circle children="Youth Church" /></NavLink>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}>
                   <Prayers/>
                </Modal>
            </div>
            <div className="youth">
                    <div className="activity">
                        <div className="tx">
                        <h2>Weekly Activity</h2>
                        <ul>
                            <li><span>Mondays:</span> Fellowship <span>9:00am</span></li>
                            <li><span>Tuesdays:</span> Fellowship</li>
                            <li><span>Wednesdays:</span> Fellowship</li>
                            <li><span>Thursdays:</span> Fellowship</li>
                            <li><span>Fridays:</span> Fellowship</li>
                            <li><span>Saturdays:</span> Fellowship</li>
                            <li><span>Sundays:</span> Fellowship</li>
                        
                        </ul>
                    </div>
                    </div>
                    <div className="activity">
                        <div className="tx">
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                        </ul>
                        </div>
                    </div>
                </div>
            <Footer/>
            </>
        )
    }
};

export default Home;