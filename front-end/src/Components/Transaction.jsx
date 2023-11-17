// TransactionHistory.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-01-01', totalAmount: 30, employeeId: 'E001' },
    { id: 2, date: '2023-02-15', totalAmount: 25, employeeId: 'E002' },
    // Add more transactions as needed
  ]);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4>Transaction History</h4>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Total Amount</th>
                    <th>Employee ID</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.date}</td>
                      <td>${transaction.totalAmount}</td>
                      <td>{transaction.employeeId}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TransactionHistory;
