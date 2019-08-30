import React from "react";
import striptags from 'striptags';
import {NavLink} from "react-router-dom";

import "../index.css";

const topicCards = ({topics}) => {
        return(
            <div >
                <h2>Topics</h2>
                {topics && topics.map((topic, index) => (
                <div key={index} className="trend">
                    <h2>{topic.topic}</h2>
                    {striptags(topic.detail).slice(0, 25) + "..."} 
			 	        <NavLink to={`/topic/${topic.id}`}>Read More</NavLink>
                    <div className="foot">
                        <span>Created by:<p>{topic.name}</p></span>
                        <span>Day created:<p>{topic.date}</p></span>
                    </div>
                </div>
                ))}
            </div>
        )
};

export default topicCards;