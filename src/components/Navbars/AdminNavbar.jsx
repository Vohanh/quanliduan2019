import React from "react";
import classnames from "classnames";
import {
  Collapse,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentDidUpdate(e) {
    if (
      window.outerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
  };
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  toggleCollapse = () => {
    let newState = {
      collapseOpen: !this.state.collapseOpen
    };
    if (!this.state.collapseOpen) {
      newState["color"] = "bg-white";
    } else {
      newState["color"] = "navbar-transparent";
    }
    this.setState(newState);
  };

  render() {
    let pathNameSlice = this.props.location.pathname.slice(6)
    let pathNameName = pathNameSlice.split("-", 2)
    return (
      <>
        <Navbar
          className={classnames("navbar-absolute fixed-top", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classnames("navbar-toggle", {
                  toggled: this.state.sidebarOpen
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <span className="d-none d-md-block">
                  {pathNameName[0]}  {pathNameName[1]} &nbsp;
                  {this.props.location.pathname === "/user/get-OWF" ?
                    <>
                      <p className="text-danger"> +10</p>
                      <p className="ml-1 text-info "> OWF 20,276 </p>  &nbsp;
                     <p className="ml-1 OWF-Hours " style={{ fontSize: "14px" }}> 50,489 Hours</p>
                    </>
                    : ""
                  }
                </span>
                <span className="d-block d-md-none">Quản lý dự án</span>
              </NavbarBrand>
            </div>
            <button
              aria-controls="navigation-index"
              aria-expanded={this.state.collapseOpen}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              // data-target="#navigation"
              data-toggle="collapse"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse
              className="justify-content-end"
              navbar
              isOpen={this.state.collapseOpen}
            >
                  <Form>
                    <InputGroup className="no-border">
                      <Input defaultValue="" placeholder="Search..." type="text" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="nc-icon nc-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
