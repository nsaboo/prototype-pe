import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


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
  }

  render() {
    return(
      <div id="header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"> PharmEasy </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav onClick={this.handleNav}>
              <LinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/">
                <NavItem eventKey={2}>Health & Wellness Products</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Health & Checkups" id="basic-nav-dropdown">
                <LinkContainer to='/hospital'>
                  <MenuItem eventKey={3.1}>Hospitals</MenuItem>
                </LinkContainer>
                <LinkContainer to="/doctor">
                  <NavItem eventKey={3.2}>Doctors</NavItem>
                </LinkContainer>
                <LinkContainer to='/pharmacy'>
                  <MenuItem eventKey={3.3}>Pharmacies</MenuItem>
                </LinkContainer>
                <LinkContainer to='/laboratory'>
                  <MenuItem eventKey={3.4}>Diagnostic Labs</MenuItem>
                </LinkContainer>
                <LinkContainer to='/insurer'>
                  <MenuItem eventKey={3.5}>Insurance</MenuItem>
                </LinkContainer>
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
                <LinkContainer to='/profile'>
                  <MenuItem eventKey={6.1}>My Profile</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to='/order'>
                  <MenuItem eventKey={6.2}>My Orders</MenuItem>
                </LinkContainer>
                <LinkContainer to='/prescription'>
                  <MenuItem eventKey={6.3}>My Prescriptions</MenuItem>
                </LinkContainer>
                <LinkContainer to='/history'>
                  <MenuItem eventKey={6.4}>My History</MenuItem>
                </LinkContainer>
                <MenuItem divider />
                <LinkContainer to='/wallet'>
                  <MenuItem eventKey={6.5}>My Wallet</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
