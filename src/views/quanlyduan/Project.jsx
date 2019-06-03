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

class Project extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" pull-left>Tất cả dự án</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">STT</th>
                        <th>Tên dự án</th>
                        <th className="text-center">Thời gian bắt đầu</th>
                        <th className="text-center">Thời gian kết thúc</th>
                        <th className="text-center">Trưởng nhóm</th>
                        <th className="text-center">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>EVoucher</td>
                        <td className="text-center">01/03/2019</td>
                        <td className="text-center">01/07/2019</td>
                        <td className="text-center">Trần Thị Bích Mai</td>
                        <td className="text-right">
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
                        <td>IOT</td>
                        <td className="text-center">27/4/2019</td>
                        <td className="text-center">4/5/2019</td>
                        <td className="text-center">Trần Văn A</td>
                        <td className="text-right">
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
                        <td>Evoucher</td>
                        <td className="text-center">12/03/2019</td>
                        <td className="text-center">12/07/2019</td>
                        <td className="text-center">Phan Minh Thư</td>
                        <td className="text-right">
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
                        <td>Nông sản xanh</td>
                        <td className="text-center">10/05/2019</td>
                        <td className="text-center">10/09/2019</td>
                        <td className="text-center">Nguyễn Thị Thanh Thúy</td>
                        <td className="text-right">
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
              </Card>
            </Col>
            <Col>
            <Button className="float-right" color="primary">Thêm dự án</Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Project;
