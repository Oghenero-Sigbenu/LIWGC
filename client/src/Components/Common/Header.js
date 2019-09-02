import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownItem,
	DropdownMenu
	// NavLink as BstNavLink,
} from "reactstrap";

import "./css/Header.css";

class Header extends Component {
	state = {
		    isOpen: false
	        };

	        toggle = () => {
		        this.setState(prevState => ({
			        isOpen: !prevState.isOpen
		            }));
                    };
                    render(){
    return (
        <div>
				<Navbar expand="md" className=" nav">
					<NavbarBrand tag={NavLink} to="/" >
					<div className="logo">
                        <NavLink to="/" className="nav-link"><h2>LIWGC</h2></NavLink>
                    </div>	
					</NavbarBrand>
					    <NavbarToggler onClick={this.toggle} />
					        <Collapse isOpen={this.state.isOpen} navbar>
						        <Nav className="ml-auto" navbar>
							        <NavItem>
                                    <NavLink exact to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink exact to="/about" className="nav-link">
                                      About us
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
									<NavLink to="/youth" className="nav-link">
										Youth Church
									</NavLink>
								    </NavItem>
                                    <NavItem>
									<NavLink to="/live" className="nav-link">
										Livestream
									</NavLink>
								    </NavItem> <NavItem>
									<NavLink to="/download" className="nav-link">
										Downloads
									</NavLink>
								    </NavItem>
							        {/* <NavItem> */}
							{/* </NavItem> */}
						</Nav>
					</Collapse>
				</Navbar>
			</div>
        // <div className="nav">
        //     <div className="logo">
        //         <NavLink to="/"><h2>LIWGC</h2></NavLink>
        //     </div>
        //     <ul className="menu">
        //        <li>About us</li> 
        //        <li>Download</li> 
        //        <li>Youth Church</li> 
        //        <li>Livestream</li> 
        //        <li>Contact Us</li>
        //     </ul>
        // </div>
    )
                    }
};

export default Header;