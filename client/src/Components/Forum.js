import React, {Component} from "react";
import {connect} from "react-redux";
//actions
import {getTopics, getOneTopic} from "../store/actions/forum"
//components
import Header from "./Common/Header";
import Topic from "./topicCards";
import Modal from "./Modal/Modal";
import AddTopic from "./AddTopic";
import Footer from "./Common/Footer";

import "../index.css";

class Forum extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isShowing: false
        }
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
    }
 componentDidMount(){
        this.props.getTopics();
    }
    openModalHandler = () => {
        console.log("open")
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        console.log("dinh")
        this.setState({
            isShowing: false
        });
    }
    selectTopic = (topic) => {
        this.props.getOneTopic(topic)
        console.log("seeing")
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
                <Topic topics={topics} topic={this.selectTopic}/>
                <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="modal"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Create a Topic</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                      <AddTopic/>
                </Modal>
            </div>
                <Footer/>
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