// BillingPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap';

const BillingPage = () => {
  const [items, setItems] = useState([
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '' });

  const addItemToBilling = () => {
    const newItem = {
      id: items.length + 1,
      name: formData.name,
      price: parseFloat(formData.price),
    };
    setItems([...items, newItem]);
    console.log(items);
    setFormData({ name: '', price: '' });
  };

  const removeItemFromBilling = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
  };

  const calculateTotalAmount = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addItemToBilling();
  };

  const handleProceedToCheckout = () => {
    // Implement the checkout logic here
    console.log('Proceeding to checkout:', items);
  };

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
                <Button variant="primary" type="submit">
                  Add Item
                </Button>
              </Form>
            </Card.Body>
          </Card>
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-right">
          <Button variant="success" onClick={handleProceedToCheckout}>
            Proceed to Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BillingPage;
