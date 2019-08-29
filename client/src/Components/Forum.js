import React, {Component} from "react";
import {connect} from "react-redux";
//actions
import {getTopics, getOneTopic} from "../store/actions/forum"
//components
import Header from "./Common/Header";
// import Footer from "./Common/Footer";

import "../index.css";

class Forum extends Component{
    componentDidMount(){
        this.props.getTopics();
        const {topics} = this.props;
        console.log(topics)

    }
    render(){
        const {topics} = this.props;
        return(
            <div className="forum">
                <Header/>
                <div>
                <div>
                   <h2>Welcome to Church Forum</h2>
                   <p>Share your ideas and thoughts.</p> 
                </div>

                <div >
                    <h2>Topics</h2>
                    {topics && topics.map((topic, index) => (
                    <div key={index} className="trend">
                        <h2>{topic.topic}</h2>
                        <p>{topic.detail}</p>
                        <div className="foot">
                            <span>Created by:<p>{topic.name}</p></span>
                            <span>Day created:<p>{topic.date}</p></span>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                {/* <Footer/> */}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const {topic, topics, created, isSubmitting} = state.Forum;
    return{
        topics,
        topic,
        created,
        isSubmitting
    }
}
export default connect (mapStateToProps, {getTopics, getOneTopic})(Forum);