import React from "react";
import striptags from 'striptags';
import {NavLink} from "react-router-dom";

import "../index.css";

const topicCards = ({topics, topic}) => {
        return(
            <div >
                <h2>Topics</h2>
                {topics && topics.map((topi, index) => (
                <div key={index} className="trend">
                    <h2>{topi.topic}</h2>
                    {striptags(topi.detail).slice(0, 25) + "..."} 
			 	        {/* <NavLink to={`/topic/${topic.id}`}>Read More</NavLink> */}
			 	        <NavLink to="/topicDetail">See more</NavLink>
                    <div className="foot">
                        <span>Created by:<p>{topi.name}</p></span>
                        <span>Day created:<p>{topi.date}</p></span>
                    </div>
                </div>
                ))}
            </div>
        )
};

export default topicCards;