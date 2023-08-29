import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, Row, Col } from "react-bootstrap";

import "../../css/NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="navbar_bg">
			<Container>
				<Navbar.Brand href="#home" className="navbar_link">
					<NavLink to={"/"} className="navbar_link">
						Home
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Form>
						<Row>
							<Col xs="12">
								<Form.Control
									type="text"
									placeholder="Search"
									className=" mr-sm-2 bg-dark text-light"
								/>
							</Col>
						</Row>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
