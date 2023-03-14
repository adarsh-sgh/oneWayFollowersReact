import { Col, List, Row } from "antd";
import Title from "antd/es/typography/Title";
import "./InfoTable.scss";
type InfoTableProps = {
  onlyFollower: any[];
  onlyFollowing: any[];
};

export default function InfoTable({
  onlyFollower,
  onlyFollowing,
}: InfoTableProps) {
  console.log(onlyFollower, onlyFollowing);
  const data = [
    { heading: "One Way Follower", data: onlyFollower },
    { heading: "One Way Following", data: onlyFollowing },
  ];
  return (
    <Row className="row">
      {data.map(({ heading, data }) => (
        <Col>
          <Title level={2}>{heading}</Title>
          <List
            dataSource={data}
            itemLayout="vertical"
            renderItem={item => (
              <List.Item>
                <a href={`https://github.com/${item}`} target="_blank">
                  {item}
                </a>
              </List.Item>
            )}
          />
        </Col>
      ))}
    </Row>
  );
}
