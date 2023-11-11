import React from "react";
import {Button, Card} from 'react-bootstrap';

const InventoryCard = ({id, name, brand, quantity,onDelete, onEdit}) => {

    const handleDelete = () =>{
        onDelete(id)
    };

    return(
        <Card style={{width:'18rem',margin:'10px'}}>
            <Card.Body>
                <Card.Title><strong>Inventory Details</strong></Card.Title>
                <Card.Text>
                    <strong>ID: </strong>{id}
                </Card.Text>
                <Card.Text>
                    <strong>Name: </strong>{name}
                </Card.Text>
                <Card.Text>
                    <strong>Brand: </strong>{brand}
                </Card.Text>
                <Card.Text>
                    <strong>Quantity: </strong>{quantity}
                </Card.Text>
                <Button variant="danger" onClick={handleDelete} className="mx-3">
                    Delete
                </Button>
                <Button variant="warning" onClick={onEdit} className="mx-3">
                    Update
                </Button>
            </Card.Body>
        </Card>
    );
};

export default InventoryCard;