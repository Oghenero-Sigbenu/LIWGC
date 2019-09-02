import React, {Component} from "react";

//component
import "./css/Footer.css";

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                {/* <div className="subscribe"> */}
                    {/* <form> */}
                        {/* <input type="email" name="email" placeholder="Email address"/>
                        <button>Subscribe Now</button> */}
                    {/* </form> */}
                {/* </div> */}
                {/* <div className="contact">
                    <h2>Contact details </h2> */}
                    {/* <p><i className="fa fa-phone" aria-hidden="true"></i> 08066778999</p>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>No **********</p>
                    <p><i className="fa fa-paper-plane" aria-hidden="true"></i>Info@liwgc.com</p> */}
                <ul className="socials">
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                </ul>
                {/* </div> */}

            </div>
        )
    }
}

export default Footer;
