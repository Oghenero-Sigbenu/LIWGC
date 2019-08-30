import React, {Component} from "react";
import {connect} from "react-redux";
//actions
import {getTopics, getOneTopic} from "../store/actions/forum"
//components
import Header from "./Common/Header";
import Topic from "./topicCards";
import Modal from "./Modal/Modal";
import AddTopic from "./AddTopic";
// import Footer from "./Common/Footer";

import "../index.css";

class Forum extends Component{
    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

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
                <Topic topics={topics}/>
                <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Create a Topic</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                      <AddTopic/>
                </Modal>
            </div>
                {/* <Footer/> */}
            </div>
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