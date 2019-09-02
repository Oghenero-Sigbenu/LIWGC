import React, {Component} from "react";

//components
import Header from "./Common/Header";
import Banner from "../assets/youth.png";

class YouthChurch extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className="banner">
                    <img src={Banner} alt="banner"></img>
                </div>
                <h2>Welcome to Youth Church</h2>
                <div className="youth">
                    <div className="events">
                        <h2>Upcoming Events</h2>
                        <ul>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                        </ul>
                    </div>
                    <div className="weekly">
                        <h2>Weekly Activity</h2>
                        <ul>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                            <li>Fellowship</li>
                        </ul>
                    </div>
                    <div className="blog">
                        <h2>Blog Post</h2>
                    </div>
                </div>
            </div>
        )
    }
};

export default YouthChurch;