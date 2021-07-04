import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import { NavLink, useHistory } from 'react-router-dom'

const NavBar = () => {

    const history = useHistory()

    return (
        <>
            <div className="container">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <NavLink className="navbar-brand" to="/" exact>
                        <img
                            src="./logomain.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="WoodStock logo"
                        />
                    </NavLink>
                    {/* <Navbar.Brand href="#home">
                    <img
                        src="./logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="WoodStock logo"
                    />
                    {' '} WoodStock
                </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <NavLink className="nav-link" to="/" exact activeClassName="active">
                                หน้าหลัก
                            </NavLink>

                            <NavLink className="nav-link" to="/tour" activeClassName="active">
                                ข้อมูลท่องเที่ยว
                            </NavLink>

                            <NavLink className="nav-link" to="/product" activeClassName="active">
                                คาเฟ่ ร้านอาหาร
                            </NavLink>

                            <NavLink className="nav-link" to="/about" activeClassName="active">
                                ที่พัก
                            </NavLink>

                            <NavDropdown
                                title="Workshop (Pagination + CRUD)"
                                id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => {
                                    history.replace('/hospital')
                                }}>
                                    ข้อมูลสถานพยาบาล (Pagination)
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item onClick={() => {
                                    history.replace('/category')
                                }}>
                                    หมวดหมู่ข่าว (CRUD)
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="secondary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default NavBar
