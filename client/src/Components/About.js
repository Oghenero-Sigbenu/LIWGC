import React from "react";

//components
import Header from "./Common/Header";
import Footer from "./Common/Footer";
const About = () => {
    return(
        <div className="about">
            <Header/>
            <div>
                <h2>Welcome to LIWGC</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
                    Aliquam sem fringilla ut morbi tincidunt augue interdum velit. 
                    Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris.
                    Vel facilisis volutpat est velit egestas dui. At auctor urna nunc id cursus metus aliquam. 
                    Risus at ultrices mi tempus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.
                    Donec massa sapien faucibus et molestie. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
                    Aliquet risus feugiat in ante. Risus nullam eget felis eget nunc lobortis mattis aliquam. 
                    Eu facilisis sed odio morbi quis commodo. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.
                    Et leo duis ut diam.   
                </p>
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
        </div>
    )
};

export default About;