import React from 'react';
import { Card, Button, ListGroup, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Updated import
import { BsCheckCircle } from 'react-icons/bs';

const UpgradePlansScreen = () => {
    
  const navigate = useNavigate();  // Updated hook

  const handleUpgradeClick = () => {
    console.log('Upgrade Now Pressed');
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg rounded">
            <Card.Body>
              <Row className="d-flex justify-content-between">
                <Col>
                  <Card.Title className="h5 font-weight-bold">Farmer Friendly Plan</Card.Title>
                  <Card.Subtitle className="text-success font-weight-bold">₹100 only</Card.Subtitle>
                </Col>
              </Row>
              <hr />
              <Card.Text className="font-weight-bold text-success">Features:</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <BsCheckCircle color="#4caf50" /> Highlighted Profile on Top
                </ListGroup.Item>
                <ListGroup.Item>
                  <BsCheckCircle color="#4caf50" /> Special Badge for Upgraded Users
                </ListGroup.Item>
                <ListGroup.Item>
                  <BsCheckCircle color="#4caf50" /> Increased Visibility in Shops
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="success"
                className="w-100 mt-3"
                onClick={handleUpgradeClick}
              >
                Upgrade Now
              </Button>
              <Card.Text className="text-center mt-3" style={{ fontSize: '10px', color: 'gray' }}>
                Terms & Conditions Apply
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UpgradePlansScreen;
