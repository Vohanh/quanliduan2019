import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Members extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Thành viên trong nhóm</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">STT</th>
                        <th>Tên thành viên</th>
                        <th>Công việc</th>
                        <th className="text-center">SĐT</th>
                        <th className="text-center">E-Mail</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className="text-center">1208-450-3838</td>
                        <td className="text-center">mike@gmail.com</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip289345217"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip289345217"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip247076752"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip247076752"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip1643763"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip1643763"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className="text-center">093-37047-385</td>
                        <td className="text-center">dicken@gmail.com</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip67723462"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip67723462"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip120598831"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip120598831"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip66076761"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip66076761"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className="text-center">03-683-48572</td>
                        <td className="text-center">rico@gmail.com</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip747701937"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip747701937"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip159182735"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip159182735"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip808966390"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip808966390"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Paul </td>
                        <td>Developer</td>
                        <td className="text-center">093-37047-385</td>
                        <td className="text-center">paul@gmail.com</td>
                        <td className="text-right">
                          <Button
                            className="btn-icon btn-neutral"
                            color="info"
                            id="tooltip67723462"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-user" />
                          </Button>{" "}
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip67723462"
                          >
                            Like
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="success"
                            id="tooltip120598831"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-edit" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip120598831"
                          >
                            Edit
                          </UncontrolledTooltip>
                          <Button
                            className="btn-icon btn-neutral"
                            color="danger"
                            id="tooltip66076761"
                            size="sm"
                            type="button"
                          >
                            <i className="fa fa-times" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip66076761"
                          >
                            Delete
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  
                </CardBody>
                <Col>
                    <Button className="float-right" color="primary">Thêm thành viên</Button>
                  </Col>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Members;
