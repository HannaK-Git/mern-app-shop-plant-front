import React, {useEffect, useState} from "react";
import {
  Container,
  Col,
  Image,
  Row,
  Form,
  Card,
  Button,
} from "react-bootstrap";
import star from "../assets/star.svg";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  
  const params = useParams();
  const [device, setDevice] = useState({info:[]})

  useEffect(() => {
fetchOneDevice(params.id).then(data => setDevice(data))
  },[])

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} alt="device image" />
        </Col>
        <Col md={4}>
          <Form className="d-flex flex-column align-items-center">
            <h1>{device.name}</h1>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Form>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h2>From {device.price} usd</h2>
            <Button variant={"outline-dark"}>Add to Basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h2>Details: </h2>
        {device.info.map((info, index) => (
          <Row
            key={info._id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: "1rem",
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
