
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Form, Button, Modal } from 'react-bootstrap';

const PaymentModal = ({ show, handleClose, totalAmount, setItems }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Total Amount: ${totalAmount}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() =>{
          handleClose();
          alert("Payment Successful");
          setItems([]);
        }}>
          Confirm Payment
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const BillingPage = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', quantity: 1 });
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const calculateTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const addItemToBilling = () => {
    const newItem = {
      id: items.length + 1,
      name: formData.name,
      price: parseFloat(formData.price === '' ? 0 : formData.price),
      quantity: parseInt(formData.quantity, 10),
    };

    setItems([ newItem, ...items]);
    setFormData({ name: '', price: '', quantity: 1 });
  };

  const handleProceedToCheckout = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addItemToBilling();
  };

  const totalAmount = calculateTotalAmount(items);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>
              <h4>Add New Item</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="itemName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter item name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group controlId="itemPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter item price"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group controlId="itemQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter item quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Button 
                  variant="primary" 
                  type="submit"
                  style={{ marginTop: '10px' }}
                >
                  Add Item
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Button variant="success" 
            onClick={handleProceedToCheckout}
            disabled={items.length === 0}
            style={{ marginTop: '20px' }}
          >
            Proceed to Checkout
          </Button>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h4>Current Bill</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
      <PaymentModal
        show={showPaymentModal}
        handleClose={handleClosePaymentModal}
        totalAmount={totalAmount}
        setItems={setItems}
      />
    </Container>
  );
};

export default BillingPage;
