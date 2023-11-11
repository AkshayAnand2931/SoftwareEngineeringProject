import React, { useEffect,useState } from 'react';
import InventoryCard from './InventoryCard';
import { Button,Form, Modal } from 'react-bootstrap';

const Inventory = () => {

    const inventoryDataTest = [
        {id: 1, name: "Product A", brand: "Brand X", quantity: 10},
        {id: 2, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 3, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 4, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 5, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 6, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 7, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 8, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 9, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 10, name: "Product B", brand: "Brand Y",quantity: 20},
        {id: 11, name: "Product B", brand: "Brand Y",quantity: 20}
    ];

    const initialFormData = {
        id:'',
        name:'',
        brand:'',
        quantity:''
    };
    const [inventoryData, setInventoryData] = useState([]);
    const [formData,setFormData] = useState({...initialFormData});
    const [showModal, setShowModal] = useState(false);
    const [modalAction, setModalAction] = useState('');

    useEffect(() =>{
        fetchInventoryData();
    });

    const fetchInventoryData = async () =>{
        try{
            //const response = await axios.get('http://localhost:5000');
            //setInventoryData(response);
            console.log("Got data");
        }
        catch(error){
            console.log("Error fetching data: ",error);
        }
    };
    
    const handleInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const handleAdd = async () => {
        try{
            //await axios.post('http://localhost:5000',formData);
            fetchInventoryData();
            handleCloseModal();
        }
        catch(error){
            console.error("Error in inserting data: ",error);
        }
    };

    const handleUpdate = async () => {
        try{
            //await axios.put('http://localhost:5000',formData);
            fetchInventoryData();
            handleCloseModal();
        }
        catch(error){
            console.error("Error updating inventory: ",error);
        }
    };

    const handleDelete = async (id) => {
        try{
            //await axios.delete(`http://localhost:5000/${id}`);
            console.log(id);
        }
        catch(error){
            console.error("Error deleting the inventory item: ",error);
        }
    };

    const handleShowModal = (action,data = null) =>{

        setModalAction(action);
        setFormData(data || initialFormData);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <div>
            <h1 style={{textAlign:'center',margin:'10px'}}>Inventory Details</h1>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {inventoryDataTest.map(item => (
                    <div key={item.id}>
                        <InventoryCard
                        id={item.id}
                        name={item.name}
                        brand={item.brand}
                        quantity={item.quantity}
                        onDelete={handleDelete}
                        onEdit={() => handleShowModal('update',item)}/>
                    </div>
                ))}
            </div>

            <Button variant="primary" className="btn-large mt-3 mx-3" onClick={() => handleShowModal('add')}>
                Add New Product
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalAction === 'add' ? 'Add ' : 'Update '} Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter ID"
                                name="id"
                                value={formData.id}
                                onChange={handleInputChange}
                                readOnly={modalAction === 'update'}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Brand"
                                name="brand"
                                value={formData.brand}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant={modalAction === 'add' ? 'primary' : 'success'} onClick={modalAction === 'add' ? handleAdd : handleUpdate}>
                        {modalAction === 'add' ? 'Add' : 'Update'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Inventory;