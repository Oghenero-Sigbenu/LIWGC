import React, {Component} from "react";

//component
import "./css/Footer.css";

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="subscribe">
                    <form>
                        <input type="email" name="email" placeholder="Email address"/>
                        <button>Subscribe Now</button>
                    </form>
                </div>
                <div className="contact">
                    <h2>Contact details </h2>
                    <p><i class="fa fa-phone" aria-hidden="true"></i> 08066778999</p>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>No **********</p>
                    <p><i class="fa fa-paper-plane" aria-hidden="true"></i>Info@liwgc.com</p>
                </div>
                <ul className="socials">
                    <li><i class="fa fa-facebook-f"></i></li>
                    <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
                </ul>

            </div>
        )
    }
}

export default Footer;
