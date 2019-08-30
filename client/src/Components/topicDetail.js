import React, {Component} from "react";
import {connect} from "react-redux";
//actions
import { getOneTopic} from "../store/actions/forum"
//components
import Header from "./Common/Header";
// import Footer from "./Common/Footer";

import "../index.css";

class TopicDetail extends Component{
    componentDidMount(){
        const topicId = this.props.match.params.id;
        this.props.getOneTopic(topicId);
    }
    render(){
        const {topic} = this.props;
        return(
            <div >
                <Header/>
                <div className="detail" key={topic && topic.id}>
                    <h2>{topic && topic.topic}</h2>
                    <p>{topic && topic.detail}</p>
                    {/* <Footer/> */}
                </div>
                <div className="foot">
                    <span>Created by:<p>{topic && topic.name}</p></span>
                    <span>Day created:<p>{topic && topic.date}</p></span>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const {topic, created, isSubmitting} = state.Forum;
    return{
        topic,
        created,
        isSubmitting
    }
}
export default connect (mapStateToProps, {getOneTopic})(TopicDetail);