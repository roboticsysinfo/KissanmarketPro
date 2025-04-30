import React from 'react';
import { Card, Button, ListGroup, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import axios from 'axios';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';

const UpgradePlansScreen = () => {
  const navigate = useNavigate();
  const { farmerDetailsforCustomer, loading } = useSelector((state) => state.farmers);
  const user = JSON.parse(localStorage.getItem("user"));
  const farmerId = user?.id;

  console.log("user", user)
  console.log("farmerId", farmerId)

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleUpgrade = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay script");
      return;
    }

    try {
      // Call your backend to create an order
      const orderResponse = await axiosInstance.post("/farmer/createRazorpayOrder", {
        amount: 10000  // Amount in paise
      });

      const options = {
        key: "rzp_test_3DSEzlHPip5mQr",
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        name: "Farmer Friendly Plan",
        description: "Upgrade to Farmer Plan",
        order_id: orderResponse.data.id,
        prefill: {
          name: user.name || "Farmer",
          email: user.email,
          contact: user.phone,
        },
        theme: {
          color: "#4caf50", // Replace COLORS.primaryColor
        },
        handler: async function (response) {
          // Verify the payment and apply the plan
          try {
            const verifyRes = await axios.post("/farmer/applyUpgradePlan", {
              farmerId,
              planName: "Farmer Friendly Plan",
              planAmount: 100,
              planValidityDays: 360,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyRes.data.success) {
              alert("Plan Upgraded Successfully!");
            } else {
              alert(verifyRes.data.message || "Plan upgrade failed.");
            }
          } catch (err) {
            console.error("Plan apply error:", err);
            alert("There was an error applying the plan.");
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order creation or payment error:", error);
      alert("Something went wrong during payment initiation.");
    }
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
              <Button variant="success" className="w-100 mt-3" onClick={handleUpgrade}>
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
