import React, {Component} from "react";
import {connect} from "react-redux";

//components
import Input from "./Common/input";
import Button from "./Common/Button";
import Textarea from "./Common/Textarea";

//action
import {prayer} from "../store/actions/prayer";

class AddPrayer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          prayer:""
        }
      
        this.click = this.click.bind(this);
        this.handChange = this.handChange.bind(this);
        // this.toggleShow = this.toggleShow.bind(this);
      };

      click = (e) => {
            e.preventDefault()
          const {name, prayer} = this.state;
          this.props.prayer({name, prayer}) 
      };
      handChange = (e) => {
        const { value, name } = e.target;
        this.setState({
          [name]: value,
        })
    };
    render(){
        return(
            <div>
                <form onSubmit={this.click}>
                    <Input label="Name:" placeHolder="Full Name" name="name" type="text"  handleChange={this.handChange}/>
                    <Textarea label="Prayer intention" placeHolder="Full Name" name="prayer" type="text"  handleChange={this.handChange}/>
                    <Button>Send</Button>
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    const {created, isSubmitting} = state.Prayer;
    return{
        created,
        isSubmitting
    }
};

export default connect (mapStateToProps, {prayer})(AddPrayer);