import React, {Component} from "react";
import {connect} from "react-redux";

//components
import Input from "./Common/input";
import Button from "./Common/Button";

//action
import {addTopic} from "../store/actions/forum";


class AddTopic extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          topic: "",
          detail:"",
          date: ""
        }
      
        this.click = this.click.bind(this);
        this.handChange = this.handChange.bind(this);
        // this.toggleShow = this.toggleShow.bind(this);
      }
    
    click = (e) => {
        e.preventDefault();
            const {name, topic, detail, date} = this.state;   
                this.props.addTopic({name, topic, detail, date})
    };
    handChange = (e) => {
        const { value, name } = e.target;
        this.setState({
          [name]: value,
        })
    };

    render(){
      const {detail} = this.state;
        return(
            <div>
            <form onSubmit={this.click}>
              <Input name="name" placeholder="Full Name" handleChange={this.handChange} type="text"/>
              <Input name="topic" placeholder="Title of Discussion"  handleChange={this.handChange} type="text"/>
              <textarea name="detail" value={detail} onChange={this.handChange} placeholder="Description" type="text"></textarea>
              <Input name="date" placeholder="Date crreated" type="text" handleChange={this.handChange} />
              <Button>Create</Button>
            </form>
        </div>
        )
    }
};

const mapStateToProps = (state) => {
    const {created, isSubmitting} = state.Forum;
    return{
        created,
        isSubmitting
    }
}
export default connect (mapStateToProps, {addTopic})(AddTopic);