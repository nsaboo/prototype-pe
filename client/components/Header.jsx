import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNav = this.handleNav.bind(this);
  }

  handleQuery(e) {
    let query = e.target.value;

    this.setState({
      query,
    });
  }

  handleSearch(e) {
    let search = this.state.query;

    // console.log('search', search);
    // call search query

    // reset this.state.query
    this.setState({
      query: '',
    });
  }

  handleNav(e) {
    e.preventDefault();
    console.log('nav href ', e.target.href);
  }

  render() {
    return(
      <div id="header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"> PharmEasy </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav onClick={this.handleNav}>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Health & Wellness Products</NavItem>
              <NavDropdown eventKey={3} title="Health & Checkups" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="#" >Hospitals</MenuItem>
                <MenuItem eventKey={3.2} href="/doctor">Doctors</MenuItem>
                <MenuItem eventKey={3.3} href="/pharmacy">Pharmacies</MenuItem>
                <MenuItem eventKey={3.4} href="/laboratory">Diagnostic Labs</MenuItem>
                <MenuItem eventKey={3.5} href="/insurer">Insurance</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Search health products"
                    value={this.state.query}
                    onChange={this.handleQuery}
                  />
                </FormGroup>
                <Button type="submit" onClick={this.handleSearch}>Search</Button>
              </Navbar.Form>
              <NavDropdown eventKey={6} title="Profile" id="basic-nav-dropdown">
                <MenuItem eventKey={6.1}>My Profile</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={6.2}>My Orders</MenuItem>
                <MenuItem eventKey={6.3}>My Prescriptions</MenuItem>
                <MenuItem eventKey={6.4}>My History</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={6.5}>My Wallet</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
