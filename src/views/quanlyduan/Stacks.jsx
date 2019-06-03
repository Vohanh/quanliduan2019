import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";

class Stacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "home",
      verticalTabs: "info",
      pageTabs: "homePages",
      openedCollapses: ["collapseOne", "collapse1"]
    };
  }
  collapsesToggle = collapse => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter(item => item !== collapse)
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses
      });
    }
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                {/* <CardHeader>
                  <h5>Horizontal Tabs</h5>
                </CardHeader> */}
                <CardBody>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            aria-expanded={this.state.horizontalTabs === "home"}
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "home"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "home" })
                            }
                          >
                            Danh sách nhiệm vụ
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-expanded={
                              this.state.horizontalTabs === "profile"
                            }
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "profile"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "profile" })
                            }
                          >
                            Trạng thái nhiệm vụ
                          </NavLink>
                        </NavItem>
                        
                      </Nav>
                    </div>
                  </div>
                  <TabContent
                    className="text-center"
                    id="my-tab-content"
                    activeTab={this.state.horizontalTabs}
                  >
                    <TabPane tabId="home" role="tabpanel">
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                    </TabPane>
                    <TabPane tabId="profile" role="tabpanel">
                      <p>Here is your profile.</p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Stacks;
